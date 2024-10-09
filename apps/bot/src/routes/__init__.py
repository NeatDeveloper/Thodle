from aiogram import Dispatcher

from .start import route as start_route
from .settings import route as settings_route

dispatcher = Dispatcher()

dispatcher.include_routers(
    start_route,
    settings_route
)
