import { Component, Input } from '@angular/core';
import { CheckboxViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() viewModel?: CheckboxViewModel;

  onChange($event: any): void {
    if (this.viewModel) {
      this.viewModel.value = $event.target.checked;
    }
  }
}
