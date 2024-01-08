class CustomError extends Error {

    public name: string
    public message: string;
    public code: number

    constructor(message: string, name: string, code: number) {
        super(message)
        this.name = name
        this.message = message
        this.code = code
    }

}

export default CustomError