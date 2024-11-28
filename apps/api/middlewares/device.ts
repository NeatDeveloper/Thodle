import prisma from '@repo/db';
import { factory } from '../helpers';
import { UAParser } from 'ua-parser-js';

export default factory.createMiddleware(async (__context__, next) => {
    const user = __context__.get('user');
    if(!user) await next();

    else try {
        const ip = __context__.req.header('x-forwarded-for') || __context__.req.header('remote_addr');

        const userAgent = __context__.req.header('user-agent');
        const parsedUserAgent = new UAParser(userAgent).getResult();

        const maybeDevice = await prisma.device.findFirst({
            where: {
                userID: user.id,
                ip: ip,
                device: parsedUserAgent.device.model,
                os: parsedUserAgent.os.name,
            }
        });

        if(!maybeDevice) await prisma.device.create({
            data: {
                userID: user.id,
                ip: ip,
                device: parsedUserAgent.device.model,
                os: parsedUserAgent.os.name
            }
        })
    } finally { await next() }
});
