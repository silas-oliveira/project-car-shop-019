import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const errorHandler: ErrorRequestHandler = (error: Error | ZodError, _req, res, _next) => {
  console.log('error', error);
  // const { message } = error;

  if (error instanceof ZodError) { 
    return res.status(400).json({ message: error.issues[0].message });
  }
  // const [msg, status, token] = message.split('/');

  // return res.status(Number(status)).json({ [token ? 'error' : 'message']: msg });
};

export default errorHandler;
