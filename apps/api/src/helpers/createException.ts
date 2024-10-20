import { HTTPException } from 'hono/http-exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default ((status, options) => {
    const response = new Response(options?.message || ReasonPhrases[status], {
        status: StatusCodes[status],
        statusText: options?.message || ReasonPhrases[status],
    });

    if(options?.response) return response;

    return new HTTPException(StatusCodes[status], { res: response });
}) as APP.CreateException;
