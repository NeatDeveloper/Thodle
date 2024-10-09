from aiogram.filters import CommandStart
from aiogram.types import Message
from aiogram import Router

route = Router()

@route.message(CommandStart())
async def on_start(message: Message):
    await message.answer('Hello, world!')
