import CustomError from "./CustomError";

class NotAuthorized extends CustomError {
    public name: 'NotAuthorized'
    public message: string;
    public code: number

    constructor(message: string ,code: number) {
        super(message, 'NotAuthorized', code)
        this.name = 'NotAuthorized'
        this.message = message
        this.code = code
    }
}

export default NotAuthorized