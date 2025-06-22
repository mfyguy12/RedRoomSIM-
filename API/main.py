from fastapi import FastAPI, Request, HTTPException
from db import SessionLocal
from models import UserLoginLog
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or "*" for dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class LoginLogRequest(BaseModel):
    uid: str
    email: str
    role: str

@app.post("/log-login")
async def log_user_login(data: LoginLogRequest, request: Request):
    db = SessionLocal()
    try:
        ip_address = request.client.host
        log_entry = UserLoginLog(
            uid=data.uid,
            email=data.email,
            role=data.role,
            event="login",
            ip_address=ip_address
        )
        db.add(log_entry)
        db.commit()
        return {"message": "Login logged"}
    except Exception as e:
        db.rollback()
        return {"status": "error", "detail": str(e)}
    finally:
        db.close()

@app.post("/log-logout")
async def log_logout(request: Request):
    data = await request.json()
    db = SessionLocal()
    try:
        log = UserLoginLog(
            uid=data["uid"],
            email=data["email"],
            role=data.get("role", "unknown"),
            event="logout"
        )
        db.add(log)
        db.commit()
        return {"message": "Logout logged"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

@app.post("/log-password-change")
async def log_password_change(request: Request):
    data = await request.json()
    db = SessionLocal()
    try:
        log = UserLoginLog(
            uid=data["uid"],
            email=data["email"],
            role=data.get("role", "unknown"),
            event="password_change"
        )
        db.add(log)
        db.commit()
        return {"message": "Password change logged"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

@app.get("/login-activity")
def get_login_activity():
    db = SessionLocal()
    try:
        logs = db.query(UserLoginLog).order_by(UserLoginLog.timestamp.desc()).all()
        return [
            {
                "email": log.email,
                "role": log.role,
                "event": log.event,
                "timestamp": log.timestamp.isoformat()
            }
            for log in logs
        ]
    finally:
        db.close()
