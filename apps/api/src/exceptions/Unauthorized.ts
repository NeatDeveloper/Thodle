import { HTTPException } from 'hono/http-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default (message => new HTTPException(StatusCodes.UNAUTHORIZED, {
    res: new Response(message || ReasonPhrases.UNAUTHORIZED, {
        status: StatusCodes.UNAUTHORIZED,
        statusText: message || ReasonPhrases.UNAUTHORIZED,
    })
})) as APP.Exception;
