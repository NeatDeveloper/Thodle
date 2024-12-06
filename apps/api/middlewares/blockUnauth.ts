import { CreateException, factory } from 'helpers';

export default factory.createMiddleware(async (__context__, next) => {
    const user = __context__.get('user');

    if(!user) throw CreateException('UNAUTHORIZED');

    await next();
});
