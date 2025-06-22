from fastapi import FastAPI
from app.routes.sim_router import router as sim_router

app = FastAPI(title="RedRoomSim - Backend")

app.include_router(sim_router, prefix="/api/sim")
