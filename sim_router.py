from fastapi import APIRouter
from app.services.sim_logic import load_scenario_from_file
from app.models.sim_models import SimScenario

router = APIRouter()

@router.get("/scattered_spider", response_model=SimScenario)
def get_simulation():
    scenario = load_scenario_from_file("scattered_spider.json")
    return scenario
