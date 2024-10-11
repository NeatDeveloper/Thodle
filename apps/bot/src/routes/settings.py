from aiogram.filters import Command
from aiogram.types import Message
from aiogram import Router

route = Router()

@route.message(Command('settings'))
async def on_settings(message: Message):
    await message.answer('This is a settings!')
    await message.bot.send_dice(message.chat.id)
