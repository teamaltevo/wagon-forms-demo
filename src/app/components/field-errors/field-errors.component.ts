import { Component, Input } from '@angular/core';
import { FieldViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {
  @Input() viewModel?: FieldViewModel<any>
}
