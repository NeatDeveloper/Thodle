import { Api } from "grammy";
import { getTelegram } from '@repo/utils/env';

const telegram = getTelegram();

const api = new Api(telegram.TELEGRAM_API_TOKEN);


export default api;
