import { HTTPException } from 'hono/http-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default ((status, message) => new HTTPException(
    StatusCodes[status], {
    res: new Response(message || ReasonPhrases[status], {
        status: StatusCodes[status],
        statusText: message || ReasonPhrases[status],
    })
})) as APP.CreateException;
