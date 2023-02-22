import { CheckboxViewModel, EmailFieldViewModel, FileInputViewModel, FormViewModel, MirrorFieldViewModel, NumericFieldViewModel, PasswordFieldViewModel, SelectViewModel, TextFieldViewModel } from "@writools/wagon-forms";

export interface DemoInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  age: number;
  subscribe: boolean;
  employment: string;
}

export class DemoFormViewModel extends FormViewModel<DemoInterface> {

  firstName = new TextFieldViewModel({
    name: 'firstName',
    required: true,
    placeholder: 'John',
    label: 'First name',
    hint: 'What is your first name?',
  });

  lastName = new TextFieldViewModel({
    name: 'lastName',
    required: true,
    placeholder: 'Smith',
    label: 'Last name',
    hint: 'What is your last name?',
  });

  email = new EmailFieldViewModel({
    name: 'email',
    required: true,
    label: 'Email address',
    hint: 'What is your email address?',
    placeholder: 'john.smit@mail.com'
  });

  password = new PasswordFieldViewModel({
    name: 'password',
    required: true,
    label: 'Password',
    hint: 'Choose a new password',
    minLength: 8,
  });

  passwordConfirmation = new MirrorFieldViewModel({
    name: 'passwordConfirmation',
    label: 'Password confirmation',
    hint: 'Enter your password again',
    mirrors: this.password,
  });

  age = new NumericFieldViewModel({
    name: 'age',
    required: true,
    label: 'Age',
    hint: 'How old are you?',
    minValue: 18,
    maxValue: 99,
  });

  subscribe = new CheckboxViewModel({
    name: 'subscribe',
    required: false,
    label: 'Subscribe to our newsletter',
    hint: 'We will send you a newsletter every month',
    placeholder: 'I want to subscribe'
  });

  employment = new SelectViewModel({
    name: 'employment',
    required: false,
    label: 'Employment',
    hint: 'What better describes your situation?',
    placeholder: 'Select an option',
    options: [
      { value: 'student', label: 'Student' },
      { value: 'employed', label: 'Employed' },
      { value: 'unemployed', label: 'Unemployed' }
    ]
  })

  fileInput = new FileInputViewModel({
    name: 'fileInput',
    required: false,
    label: 'File input',
    hint: 'Allowed file types: .jpg, .png',
    placeholder: 'Select a file',
    allowedExtensions: ['jpg', 'png'],
    maxSizeKb: 1024
  });

  public getInputs() {
    return [
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.passwordConfirmation,
      this.age,
      this.subscribe,
      this.employment,
      this.fileInput
    ];
  }
}
