import { Component, Input } from '@angular/core';
import { SelectViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent {
  @Input() viewModel?: SelectViewModel;
}
