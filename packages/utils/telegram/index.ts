import { createHmac, type BinaryLike } from 'node:crypto';
import { getTelegram } from '../env';

const telegram = getTelegram();

export const
    verify = (data: string): WebAppUser | null => {
        if (!data) return null;

        const
            parsedData = new URLSearchParams(data),
            hash = parsedData.get('hash');

        parsedData.delete('hash');

        const
            SECRET_KEY = createHmac('sha256', 'WebAppData')
                .update(telegram.TELEGRAM_API_TOKEN)
                .digest() as unknown as BinaryLike,

            dataCheckString = Array.from(parsedData.entries())
                .map(([key, value]) => `${key}=${value}`)
                .sort()
                .join('\n'),

            calculatedHash = createHmac('sha256', SECRET_KEY).update(dataCheckString).digest('hex');

        return calculatedHash === hash ? JSON.parse(parsedData.get('user') as string) as WebAppUser : null;
    }
