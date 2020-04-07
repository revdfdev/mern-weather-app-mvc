
class ResponseUtils {

    static successResponse(res, statusCode, message, data) {
        return res.status(statusCode).json({
            message,
            data
        });
    }

    static errorResponse(res, statusCode, errorMessage) {
        return res.status(statusCode).json({
            errorMessage
        });
    }
}

module.exports = ResponseUtils;