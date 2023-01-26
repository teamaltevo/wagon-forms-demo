import { Component } from '@angular/core';
import { DemoFormViewModel } from './demo.vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewModel = new DemoFormViewModel();
}
