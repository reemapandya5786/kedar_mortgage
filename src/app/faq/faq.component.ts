import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FAQComponent {
  selectedCategory = 'all';
  searchTerm = '';

  categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'application', name: 'Application Process' },
    { id: 'rates', name: 'Rates & Terms' },
    { id: 'qualification', name: 'Qualification' },
    { id: 'closing', name: 'Closing' },
  ];

  faqs: FAQ[] = [
    {
      id: 1,
      category: 'general',
      question: 'What is a mortgage?',
      answer:
        'A mortgage is a loan used to purchase a home or property. The property serves as collateral for the loan, and you repay the mortgage over time with interest. Most mortgages have terms of 15 or 30 years.',
    },
    {
      id: 2,
      category: 'general',
      question: 'What types of mortgages do you offer?',
      answer:
        'We offer various mortgage types including conventional loans, FHA loans, VA loans, USDA loans, jumbo loans, and adjustable-rate mortgages (ARMs). Each has different requirements and benefits depending on your situation.',
    },
    {
      id: 3,
      category: 'qualification',
      question: 'How much house can I afford?',
      answer:
        'Generally, your monthly housing payment should not exceed 28% of your gross monthly income. However, this varies based on your debt-to-income ratio, credit score, down payment, and other factors. Use our mortgage calculator or speak with a loan officer for a personalized estimate.',
    },
    {
      id: 4,
      category: 'qualification',
      question: 'What credit score do I need to buy a home?',
      answer:
        'While requirements vary by loan type, most conventional loans require a minimum credit score of 620. FHA loans may accept scores as low as 580 with a 3.5% down payment. Some programs for first-time buyers may have different requirements.',
    },
    {
      id: 5,
      category: 'application',
      question: 'What documents do I need to apply for a mortgage?',
      answer:
        "Typically, you'll need: proof of income (pay stubs, W-2s, tax returns), bank statements, identification, employment verification, and information about your debts and assets. We'll provide a complete checklist when you start your application.",
    },
    {
      id: 6,
      category: 'application',
      question: 'How long does the mortgage process take?',
      answer:
        'On average, the mortgage process takes 30-45 days from application to closing. However, this can vary based on the complexity of your situation, the type of loan, and how quickly you provide required documentation.',
    },
    {
      id: 7,
      category: 'rates',
      question: 'What factors affect my interest rate?',
      answer:
        'Your interest rate is influenced by your credit score, down payment amount, loan type, loan term, debt-to-income ratio, and current market conditions. Generally, higher credit scores and larger down payments result in lower rates.',
    },
    {
      id: 8,
      category: 'rates',
      question: 'Should I choose a fixed or adjustable rate mortgage?',
      answer:
        'Fixed-rate mortgages have the same interest rate for the life of the loan, providing stable payments. ARMs typically start with lower rates that adjust after a set period. Fixed rates are better if you plan to stay long-term; ARMs might work if you plan to move or refinance within a few years.',
    },
    {
      id: 9,
      category: 'application',
      question: 'What is pre-approval and why do I need it?',
      answer:
        "Pre-approval is a lender's written commitment to lend you up to a certain amount based on a thorough review of your finances. It shows sellers you're a serious buyer and can help you make stronger offers. It's highly recommended before house hunting.",
    },
    {
      id: 10,
      category: 'closing',
      question: 'What are closing costs?',
      answer:
        'Closing costs are fees associated with finalizing your mortgage, typically 2-5% of the purchase price. They include appraisal fees, title insurance, attorney fees, origination fees, and prepaid items like property taxes and homeowners insurance.',
    },
    {
      id: 11,
      category: 'qualification',
      question: 'How much do I need for a down payment?',
      answer:
        'Down payment requirements vary by loan type. Conventional loans may require as little as 3-5%, FHA loans require 3.5%, VA and USDA loans may require 0% for qualified buyers. However, putting down 20% helps you avoid private mortgage insurance (PMI).',
    },
    {
      id: 12,
      category: 'closing',
      question: 'Can I roll closing costs into my mortgage?',
      answer:
        'In some cases, yes. You can ask the seller to pay closing costs, or you might be able to finance them by accepting a slightly higher interest rate (lender credits). However, you typically cannot roll closing costs into the loan amount for a purchase.',
    },
  ];

  get filteredFaqs(): FAQ[] {
    let filtered = this.faqs;

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(
        (faq) => faq.category === this.selectedCategory,
      );
    }

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term),
      );
    }

    return filtered;
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  toggleFaq(faq: FAQ) {
    faq.isExpanded = !faq.isExpanded;
  }
}
