import { Action } from '@reduxjs/toolkit';

export const testMiddleWare = () =>
  (next: (action: Action) => void) => (action: Action) => next(action);
