import { Component, Input } from '@angular/core';
import { FieldViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() viewModel?: FieldViewModel<string>;
}

