export class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    const stackLine = this.stack.split('\n')[1]; 
    const match = stackLine.match(/\(([^)]+)\)/); 

    this.filePath = match ? match[1].split(':').slice(0, -2).join(':') : 'Unknown file';
  }
}

export class ValidationError extends CustomError {
  constructor(target) {
    super("Validation failed " + target || " !", 400);
  }
}

export class InValidationError extends CustomError {
  constructor(target) {
    super(`InvalidObjectId id ${target} !`, 400);
  }
}
        


export class ForbiddenError extends CustomError {
  constructor(message = 'Access forbidden') {
    super(message, 403);
  }
}

export class AuthorizationError extends CustomError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

export class ExistsError extends CustomError{
    constructor(target){
        super(target + " already exists !", 406)
    }
}
export class NotFoundError extends CustomError {
  constructor(target = "Resurse") {
    super(target + " not found !", 404);
  }
}

export class JsonWebTokenError extends CustomError {
  constructor(message = 'Invalid Token !') {
    super(message, 401);
  }
}

export class ExpiredError extends CustomError {
  constructor(message = 'Expired  Token !') {
    super(message, 406);
  }
}