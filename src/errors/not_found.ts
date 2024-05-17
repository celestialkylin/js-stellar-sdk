import { NetworkError } from "./network";

/**
 * NotFoundError is raised when the resource requested from Horizon is
 * unavailable.
 * @extends NetworkError
 * @inheritdoc
 */
export class NotFoundError extends NetworkError {
  /**
   * Create a NotFoundError.
   * @param {string} message Human-readable error message
   * @param {any} response Response details, received from the Horizon server
   */
  constructor(message: string, response: any) {
    const trueProto = new.target.prototype;
    super(message, response);
    this.__proto__ = trueProto;
    this.constructor = NotFoundError;
    this.name = "NotFoundError";
  }
}