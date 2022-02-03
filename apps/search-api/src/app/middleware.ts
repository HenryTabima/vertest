import { Request, Response, NextFunction } from 'express';
import { environment } from '../environments/environment';

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] [METHOD - ${req.method}] [URL - ${req.url}]`);

  res.on('finish', () => {
    console.log(`[${new Date().toISOString()}] [METHOD - ${req.method}] [URL - ${req.url}] [STATUS - ${res.statusCode}]`);
  });
  next();
}

export function accessControlMiddleware(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', environment.allowedOrigins);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET POST PATCH DELETE PUT');
    res.status(200).json({});
  }

  next();
}

export function errorHandler(req: Request, res: Response) {
  const error = new Error('not found');
  return res.status(404).json({ message: error.message });
}
