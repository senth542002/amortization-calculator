import {Component} from '@angular/core';

@Component({
  selector: 'amortization-schedule-calculator',
  templateUrl: 'app/amortization-schedule-calculator.component.html'

})

export class AmortizationScheduleCalculatorComponent{

  public loanAmount = 0;
  public loanTerm = 0;
  public loanInterestRate = 0;
  public submitted = false;

  constructor(){}

calculate(){
  this.submitted =true;
  console.log("loanAmount:"+ this.loanAmount);
  console.log("loanTerm:"+ this.loanTerm);
  console.log("loanInterestRate:"+ this.loanInterestRate);
}

}
