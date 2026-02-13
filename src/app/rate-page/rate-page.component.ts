import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MortgageRate {
  loanType: string;
  term: string;
  rate: number;
  apr: number;
  points: number;
  monthlyPayment: number;
}

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
  lastUpdated = 'February 12, 2026 - 10:00 AM EST';

  rates: MortgageRate[] = [
    {
      loanType: 'Conventional',
      term: '30-Year Fixed',
      rate: 6.875,
      apr: 6.95,
      points: 0.5,
      monthlyPayment: 1973,
    },
    {
      loanType: 'Conventional',
      term: '15-Year Fixed',
      rate: 6.125,
      apr: 6.25,
      points: 0.5,
      monthlyPayment: 2574,
    },
    {
      loanType: 'FHA',
      term: '30-Year Fixed',
      rate: 6.5,
      apr: 6.65,
      points: 0,
      monthlyPayment: 1893,
    },
    {
      loanType: 'FHA',
      term: '15-Year Fixed',
      rate: 5.875,
      apr: 6.0,
      points: 0,
      monthlyPayment: 2503,
    },
    {
      loanType: 'VA',
      term: '30-Year Fixed',
      rate: 6.25,
      apr: 6.35,
      points: 0,
      monthlyPayment: 1847,
    },
    {
      loanType: 'VA',
      term: '15-Year Fixed',
      rate: 5.75,
      apr: 5.85,
      points: 0,
      monthlyPayment: 2490,
    },
    {
      loanType: 'Jumbo',
      term: '30-Year Fixed',
      rate: 7.125,
      apr: 7.25,
      points: 1,
      monthlyPayment: 2024,
    },
    {
      loanType: 'Jumbo',
      term: '15-Year Fixed',
      rate: 6.375,
      apr: 6.5,
      points: 1,
      monthlyPayment: 2612,
    },
  ];

  // Calculator properties
  calcLoanAmount: number = 300000;
  calcDownPayment: number = 60000;
  calcInterestRate: number = 6.875;
  calcLoanTerm: number = 30;

  calculation?: LoanCalculation;

  calculateMortgage() {
    const principal = this.calcLoanAmount - this.calcDownPayment;
    const monthlyRate = this.calcInterestRate / 100 / 12;
    const numberOfPayments = this.calcLoanTerm * 12;

    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    this.calculation = {
      loanAmount: principal,
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
      totalPayment: totalPayment,
    };
  }

  getRatesByType(type: string): MortgageRate[] {
    return this.rates.filter((rate) => rate.loanType === type);
  }
}
