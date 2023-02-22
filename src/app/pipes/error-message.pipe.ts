import { Pipe, PipeTransform } from '@angular/core';
import { ErrorMessageFactoryBuilder, FieldViewModel, FormErrors } from '@writools/wagon-forms';
import { Observable } from 'rxjs';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(vm: FieldViewModel<any>): Observable<string[] | undefined> {
    return vm.errorsForDisplay$(errorMessageFactory);
  }
}

const errorMessageFactory = ErrorMessageFactoryBuilder({
  [FormErrors.REQUIRED_FIELD]: "This field is required",
  [FormErrors.INVALID_EMAIL_ADDRESS]: "This is not a valid email address",
  [FormErrors.MAX_LENGTH_OVERFLOW] : "The maximum length is {maxLength}",
  [FormErrors.MIN_LENGTH_REQUIRED] : "The minimum length is {minLength}",
  [FormErrors.FIELDS_DOESNT_MATCH] : "The fields doesn't match",
  [FormErrors.NOT_A_NUMBER] : "This value should be a number",
  [FormErrors.NOT_AN_INTEGER] : "This value should be an integer",
  [FormErrors.MIN_VALUE_OVERFLOW] : "This value should be greater than {minValue}",
  [FormErrors.MAX_VALUE_OVERFLOW] : "This value should be less than {maxValue}",
  [FormErrors.INVALID_FORMAT] : "Please enter a valid value",
  [FormErrors.INVALID_OPTION] : "This option is not valid",
  [FormErrors.MIN_DATE_OVERFLOW] : "Please enter a date after {minDate}",
  [FormErrors.MAX_DATE_OVERFLOW] : "Please enter a date before {maxDate}",
  [FormErrors.INVALID_PHONE_NUMBER] : "This is not a valid phone number",
  [FormErrors.FILE_SIZE_TOO_LARGE] : "The file is too large",
  [FormErrors.FILE_EXTENSION_NOT_ALLOWED] : "This file type is not allowed",
})
