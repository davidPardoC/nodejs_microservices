class CustomError extends Error {
    status:number
    constructor(message:string, statusCode:number){
        super()
        this.message = message
        this.status = statusCode
    }
}

class ConflictError extends CustomError {
    constructor(message = "Resource already exists", statusCode = 409){
        super(message, statusCode)
    }
}