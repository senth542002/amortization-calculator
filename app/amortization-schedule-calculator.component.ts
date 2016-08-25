import {Component} from '@angular/core';
import { AmortizationService } from './amortization.service';
import { AmortizationSchedule } from './amortization-schedule';
import { Observable }        from 'rxjs/Observable';
import {DataTableDirectives} from 'angular2-datatable/datatable';
import * as _ from 'lodash';

@Component({
  selector: 'amortization-schedule-calculator',
  templateUrl: 'app/amortization-schedule-calculator.component.html',
  providers: [ AmortizationService ],
  directives: [DataTableDirectives]

})

export class AmortizationScheduleCalculatorComponent{

  amortizationSchedules: AmortizationSchedule[];
  public loanAmount = 4000000;
  public loanTerm = 240;
  public loanInterest = 9.5;
  public submitted = false;
  error: any;

  constructor(private amortizationService: AmortizationService){

  }

calculate(){
  this.submitted =true;
  this.amortizationService.fetchAmortizationSchedule(this.loanAmount, this.loanTerm, this.loanInterest)
  .then(schedules => this.amortizationSchedules = schedules).catch(error => this.error = error);
}
back(){
  this.submitted = false;
}
}
