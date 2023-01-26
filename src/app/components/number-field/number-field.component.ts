import { Component, Input } from '@angular/core';
import { NumericFieldViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent {
  @Input() viewModel?: NumericFieldViewModel;


  //We need custom binding to convert the value from/to string <-> number
  get inputValue(): string {
    return this.viewModel?.value?.toString(10) || '';
  }

  set inputValue(value: string) {
    const parsed = this.viewModel?.integer ? parseInt(value) : parseFloat(value);
    if (!isNaN(parsed) && this.viewModel) {
      this.viewModel.value = parsed;
    } else {
      console.warn('Invalid number', value);
    }
  }
}
