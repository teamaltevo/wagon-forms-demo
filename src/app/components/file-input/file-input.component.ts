import { Component, Input } from '@angular/core';
import { FileInputViewModel } from '@writools/wagon-forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  @Input() viewModel?: FileInputViewModel;

  onFileChange(event: Event) {
    if (!this.viewModel) { return }
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.viewModel.value = files[0];
    }
  }
}
