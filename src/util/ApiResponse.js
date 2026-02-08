class ApiResponse {
    constructor(isSuccess, data, message, statusCode) {
        this.isSuccess = isSuccess;
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
    }

    static ok(data, message = "Success") {
        return new ApiResponse(true, data, message, 200);
    }

    static created(data, message = "Record Created Successfully") {
        return new ApiResponse(true, data, message, 201);
    }

    static notFound(message = "Not Found") {
        return new ApiResponse(false, null, message, 404);
    }

    static badRequest(message = "Bad Request") {
        return new ApiResponse(false, null, message, 400);
    }

    static error(message = "Internal Servser Error") {
        return new ApiResponse(false, null, message, 500);
    }
}

module.exports = ApiResponse;
