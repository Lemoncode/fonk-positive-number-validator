import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace positiveNumber {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
