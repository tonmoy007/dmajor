
export class RequestHelper {
    constructor() {

    }
    OnTimeout(req: any, res: any, next: any) {
        if (!req.timedout) {
            next();
        }
        else {
            return res.status(504).json({ success: 0, error: 'timeout', message: 'Request timeout' });
        }
    }
}