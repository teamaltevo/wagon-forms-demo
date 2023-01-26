import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-panel',
  templateUrl: './demo-result-panel.component.html',
  styleUrls: ['./demo-result-panel.component.scss']
})
export class DemoResultPanelComponent {
  @Input() resultObject?: {
    type: string;
    data: any;
  };

  get result(): string {
    return JSON.stringify(this.resultObject?.data, null, 3);
  }
}
