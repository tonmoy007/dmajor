"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestHelper = (function () {
    function RequestHelper() {
    }
    RequestHelper.prototype.OnTimeout = function (req, res, next) {
        if (!req.timedout) {
            next();
        }
        else {
            return res.status(504).json({ success: 0, error: 'timeout', message: 'Request timeout' });
        }
    };
    return RequestHelper;
}());
exports.RequestHelper = RequestHelper;
