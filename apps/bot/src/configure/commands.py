from aiogram import Bot
from aiogram.types import BotCommand

ru_commands: list[BotCommand] = [
    BotCommand(command='start', description='Запустить приложение'),
    BotCommand(command='settings', description='Настройки приложения'),
    BotCommand(command='stop', description='Остановка приложения'),
]
en_commands: list[BotCommand] = [
    BotCommand(command='start', description='Startup application'),
    BotCommand(command='settings', description='Settings application'),
    BotCommand(command='stop', description='Stop application'),
]

async def set_default_commands(bot: Bot):
    await bot.set_my_commands(commands=ru_commands, language_code="ru")
    await bot.set_my_commands(commands=en_commands, language_code="en")
