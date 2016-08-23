import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AmortizationScheduleCalculatorComponent } from './amortization-schedule-calculator.component';

@NgModule({
  imports: [ BrowserModule , FormsModule],
  declarations: [ AppComponent, AmortizationScheduleCalculatorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
