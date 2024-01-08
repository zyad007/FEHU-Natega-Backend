import CustomError from "./CustomError";

class NotFoundError extends CustomError {
    public name: 'NotFoundError'
    public message: string;
    public code: number

    constructor(message: string ,code: number) {
        super(message, 'NotFoundError', code )
        this.name = 'NotFoundError'
        this.message = message
        this.code = code
    }
}

export default NotFoundError