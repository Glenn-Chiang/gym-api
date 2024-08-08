export class CustomError extends Error {
  public statusCode: number;
  public details: {[x: string]: any};

  constructor(statusCode: number, message: string, details?: {[x: string]: any}) {
    super(message);
    this.statusCode = statusCode;
    this.details = details || {};
  }
}
