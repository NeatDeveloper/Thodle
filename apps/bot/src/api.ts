import { Api } from "grammy";


const api = new Api(Bun.env.TELEGRAM_API_TOKEN);


export default api;
