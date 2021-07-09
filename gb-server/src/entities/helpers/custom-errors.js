export {BadRequestError, NotFoundError, ConflictError, InternalServerError};

class BadRequestError extends error {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
        this.errorCode = 400;
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.errorCode = 404;
    }
}

class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ConflictError';
        this.errorCode = 409;
    }
}

class InternalServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InternalServerError';
        this.errorCode = 500;
    }
}