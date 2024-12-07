import { factory, UpdateAvatar } from 'helpers';
import { verify } from '@repo/utils/telegram';
import User from '@repo/db/user';

export default factory.createMiddleware(async (__context__, next) => {
    const [authType, authData = ''] = (__context__.req.header('Authorization') || '').split(' ');

    if (authType === 'tma') {
        const result = verify(authData);

        if (!result) await next();

        else {
            let user = await User.findUnique(result.id);

            if(!user) user = await User.create({
                lastName: result.last_name,
                firstName: result.first_name,
                isPremium: !!result.is_premium,
                lang: result.language_code || 'ru',
                tgID: result.id,
            });

            if(user) {
                __context__.set('user', user);

                if(result.photo_url) await UpdateAvatar(user, result.photo_url);
            }

            await next();
        }
    } else await next();
});
