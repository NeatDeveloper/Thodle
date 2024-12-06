import { factory, UpdateAvatar } from 'helpers';
import { verify } from '@repo/utils/telegram';
import User from '@repo/db/user';

export default factory.createMiddleware(async (__context__, next) => {
    const [authType, authData = ''] = (__context__.req.header('Authorization') || '').split(' ');

    if (authType === 'tma') {
        const result = verify(authData);

        if (!result) await next();

        else {
            const user = await User.findUnique(result.id);

            if(user) {
                __context__.set('user', user);

                if(result.photo_url) await UpdateAvatar(user, result.photo_url);
            }

            await next();
        }
    } else await next();
});
