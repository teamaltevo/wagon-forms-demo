import { Component, Input } from '@angular/core';
import { FieldViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-field-label',
  templateUrl: './field-label.component.html',
  styleUrls: ['./field-label.component.scss']
})
export class FieldLabelComponent {
  @Input() viewModel?: FieldViewModel<any>
}
