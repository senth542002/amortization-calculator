import {Component} from '@angular/core';
import { AmortizationService } from './amortization.service';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'amortization-schedule-calculator',
  templateUrl: 'app/amortization-schedule-calculator.component.html',
  providers: [ AmortizationService ]

})

export class AmortizationScheduleCalculatorComponent{

  amortizationSchedules: Observable<AmortizationSchedule[]>;
  public loanAmount = 4000000;
  public loanTerm = 240;
  public loanInterest = 9.5;
  public submitted = false;

  constructor(private amortizationService: AmortizationService){

  }

calculate(){
  this.submitted =true;
  this.amortizationSchedules = this.amortizationService.fetchAmortizationSchedule(this.loanAmount, this.loanTerm, this.loanInterest);
  this.loanAmount = 4000000;
  this.loanTerm = 240;
  this.loanInterest = 9.5;
  this.amortizationSchedules.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));
}

}
