import { isAppError } from '../types/errors';

export const getErrorMessage = (error: unknown): string => {
  if (isAppError(error)) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};