import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Fields components with viewModel bindings
import { TextFieldComponent } from './components/text-field/text-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { FieldLabelComponent } from './components/field-label/field-label.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';

// Other components for the demo page
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { DemoFormSettingsComponent } from './components/demo-form-settings/demo-form-settings.component';
import { DemoResultPanelComponent } from './components/demo-result-panel/demo-result-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    SelectFieldComponent,
    FieldLabelComponent,
    FieldErrorsComponent,
    ToggleComponent,
    NumberFieldComponent,
    DemoFormComponent,
    DemoFormSettingsComponent,
    DemoResultPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
