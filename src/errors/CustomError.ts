class CustomError implements Error {

    public name: string
    public message: string;
    public code: number

    constructor(message: string, name: string, code: number) {
        this.name = name
        this.message = message
        this.code = code
    }

}

export default CustomError