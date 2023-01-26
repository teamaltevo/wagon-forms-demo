import { Component, Input } from '@angular/core';
import { FormValidationError } from '@writools/wagon-forms';
import { DemoFormViewModel } from 'src/app/demo.vm';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent {
  @Input() viewModel?: DemoFormViewModel;

  lastResult?: any;

  submit() {
    this.viewModel?.validateForm().subscribe({
      next: (data) => {
        console.log(data);
        this.lastResult = {
          type: 'Success',
          data
        }
      },
      error: (e: FormValidationError) => {
        console.log(e.message, e.cause);
        this.lastResult = {
          type: 'FormValidationError',
          data: {
            message: e.message,
            cause: e.cause
          }
        }
      }
    })
  }
}
