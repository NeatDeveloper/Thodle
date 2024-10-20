import type { StatusCodes } from 'http-status-codes';
import type {
    ClientErrorStatusCode,
    ServerErrorStatusCode
} from 'hono/utils/http-status';

declare global {
    namespace API {
        type HTTPErrorCodes = {
            [NAME in keyof typeof StatusCodes]:
                typeof StatusCodes[NAME] extends ClientErrorStatusCode | ServerErrorStatusCode
                    ? NAME : never;
        }[keyof typeof StatusCodes];
    }
}

export { };
