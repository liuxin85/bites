import { type Request, type Response, type NextFunction } from "express";
import { errorRespnse } from "../utils/responses.js";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  errorRespnse(res, 500, err);
}
