from vars import TELEGRAM_API_TOKEN

import asyncio
from aiogram import Bot

from configure import set_default_commands

from routes import dispatcher


bot = Bot(token=TELEGRAM_API_TOKEN)


async def main():
    print('Done')
    await set_default_commands(bot)
    await dispatcher.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())
