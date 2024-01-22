import CustomError from "./CustomError";

class DataBaseError extends CustomError {
    public name: 'DataBaseError';
    public message: string;

    constructor(message: string = '') {
        super('DataBaseError', message);
        this.name = 'DataBaseError';
        this.message = message;
    }
}

export default DataBaseError