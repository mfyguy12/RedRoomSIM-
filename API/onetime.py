from db import Base, engine
from models import UserLoginLog

Base.metadata.create_all(bind=engine)
