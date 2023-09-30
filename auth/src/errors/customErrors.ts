class CustomError extends Error {
    statusCode: number
    constructor(statusCode: number, message: string) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

export class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized', statusCode = 401) {
        super(statusCode, message)
    }
}


