import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CheckboxViewModel, FormViewModel } from '@writools/wagon-forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-demo-form-settings',
  templateUrl: './demo-form-settings.component.html',
  styleUrls: ['./demo-form-settings.component.scss']
})
export class DemoFormSettingsComponent implements OnInit, OnDestroy {

  @Input() formViewModel?: FormViewModel<any>

  onDestroy$ = new Subject<void>();

  readonlyToggle = new CheckboxViewModel({
    name: 'readonlyToggle',
    required: false,
    label: 'Readonly',
    placeholder: 'Enable readonly mode',
    value: false,
  });

  disabledToggle = new CheckboxViewModel({
    name: 'disabledToggle',
    required: false,
    label: 'Disabled',
    placeholder: 'Disable all fields',
    value: false,
  });

  ngOnInit(): void {
    this.readonlyToggle.value$.pipe(takeUntil(this.onDestroy$)).subscribe(enabled => {
      this.formViewModel?.setReadonly(enabled);
    });

    this.disabledToggle.value$.pipe(takeUntil(this.onDestroy$)).subscribe(enabled => {
      this.formViewModel?.setDisabled(enabled);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
