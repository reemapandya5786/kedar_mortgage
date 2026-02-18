import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MortgageRate,
  RatesDataService,
} from '../core/data/rates-data.service';

interface LoanCalculation {
  loanAmount: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
}

@Component({
  selector: 'app-rate-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './rate-page.component.html',
  styleUrl: './rate-page.component.scss',
})
export class RatePageComponent {
  lastUpdated: string;
  rates: MortgageRate[];

  // Calculator properties
  calcLoanAmount: number = 300000;
  calcDownPayment: number = 60000;
  calcInterestRate: number = 6.875;
  calcLoanTerm: number = 30;

  calculation?: LoanCalculation;

  constructor(private ratesDataService: RatesDataService) {
    this.lastUpdated = this.ratesDataService.lastUpdated;
    this.rates = this.ratesDataService.getRates();
  }

  calculateMortgage(): void {
    if (this.calcLoanAmount <= 0 || this.calcLoanTerm <= 0) {
      this.calculation = undefined;
      return;
    }

    const principal = Math.max(this.calcLoanAmount - this.calcDownPayment, 0);
    const monthlyRate = Math.max(this.calcInterestRate, 0) / 100 / 12;
    const numberOfPayments = Math.floor(this.calcLoanTerm * 12);

    if (numberOfPayments <= 0) {
      this.calculation = undefined;
      return;
    }

    const monthlyPayment =
      monthlyRate === 0
        ? principal / numberOfPayments
        : (principal *
            (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    if (!Number.isFinite(monthlyPayment)) {
      this.calculation = undefined;
      return;
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    this.calculation = {
      loanAmount: principal,
      monthlyPayment,
      totalInterest,
      totalPayment,
    };
  }

  getRatesByType(type: string): MortgageRate[] {
    return this.ratesDataService.getRatesByType(type);
  }
}
