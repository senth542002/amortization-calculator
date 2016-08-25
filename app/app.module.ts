import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }     from '@angular/http';


import { AppComponent }  from './app.component';
import { AmortizationScheduleCalculatorComponent } from './amortization-schedule-calculator.component';
import { AmortizationService} from './amortization.service';

@NgModule({
  imports: [ BrowserModule , FormsModule, HttpModule],
  declarations: [ AppComponent, AmortizationScheduleCalculatorComponent ],
  providers: [ AmortizationService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
