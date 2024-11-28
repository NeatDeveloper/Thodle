import { factory } from '../helpers';
import { verify } from '@repo/utils/telegram';
import User from '@repo/db/user';

export default factory.createMiddleware(async (__context__, next) => {
    const [authType, authData = ''] = (__context__.req.header('Authorization') || '').split(' ');

    __context__.set('user', null);

    if (authType === 'tma') {
        const result = verify(authData);

        if (!result) await next();

        else {
            const user = await User.findUnique(result.id);

            if(user) __context__.set('user', user);

            await next();
        }
    } else await next();
});
