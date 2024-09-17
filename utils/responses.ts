import { type Response } from "express";

export function successResponse(
  res: Response,
  data: any,
  message: string = "Success"
) {
  return res.status(200).json({ successs: true, message, data });
}

export function errorRespnse(res: Response, status: number, error: string) {
  return res.status(status).json({ success: false, error });
}
