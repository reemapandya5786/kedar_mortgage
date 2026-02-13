import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  content: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

interface RelatedPost {
  id: number;
  title: string;
  excerpt: string;
}

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  postId: number = 0;
  post?: BlogPost;

  // Mock data - in a real app, this would come from a service
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Things First-Time Homebuyers Should Know',
      author: 'Sarah Johnson',
      date: 'February 10, 2026',
      category: 'First-Time Buyers',
      readTime: '5 min read',
      image: 'assets/blog/placeholder-1.jpg',
      content: [
        "Buying your first home is one of the most exciting and significant financial decisions you'll make. However, it can also be overwhelming if you're not prepared. Here are ten essential things every first-time homebuyer should know.",
        '1. Understand Your Budget: Before you start house hunting, determine how much you can realistically afford. Consider not just the mortgage payment, but also property taxes, insurance, maintenance, and utilities.',
        "2. Get Pre-Approved: A pre-approval letter from a lender shows sellers you're serious and can afford their home. This gives you a competitive edge in a hot market.",
        "3. Save for Closing Costs: Beyond your down payment, you'll need to budget for closing costs, which typically range from 2-5% of the purchase price.",
        '4. Choose the Right Loan Type: There are various mortgage options available, including conventional, FHA, VA, and USDA loans. Each has different requirements and benefits.',
        "5. Don't Skip the Home Inspection: A professional inspection can uncover potential issues that might cost you thousands down the road. Never waive this contingency.",
        "6. Consider the Neighborhood: You're not just buying a house; you're buying into a community. Research schools, crime rates, local amenities, and future development plans.",
        '7. Think Long-Term: Consider how long you plan to stay in the home. If you might move within a few years, factor in transaction costs and potential market changes.',
        "8. Understand PMI: If you put down less than 20%, you'll likely pay private mortgage insurance. Know how much it costs and when you can remove it.",
        '9. Review the HOA Rules: If the property has a homeowners association, carefully review the rules and fees. They can significantly impact your monthly costs and lifestyle.',
        '10. Work with Professionals: Having experienced professionals on your team—a real estate agent, mortgage lender, and attorney—can make the process smoother and help you avoid costly mistakes.',
        "Remember, buying a home is a journey, not a race. Take your time, do your research, and don't be afraid to ask questions. The more informed you are, the better decision you'll make.",
      ],
    },
    {
      id: 2,
      title: 'Understanding Mortgage Rates: What Affects Your Rate?',
      author: 'Michael Chen',
      date: 'February 8, 2026',
      category: 'Tips & Advice',
      readTime: '7 min read',
      image: 'assets/blog/placeholder-2.jpg',
      content: [
        'Mortgage rates play a crucial role in determining your monthly payment and the total cost of your home over time. Understanding what influences these rates can help you secure the best possible deal.',
        "The Federal Reserve: While the Fed doesn't directly set mortgage rates, its policies significantly influence them. When the Fed raises or lowers its benchmark rate, mortgage rates typically follow suit.",
        'Your Credit Score: One of the most significant factors under your control. Generally, a higher credit score translates to a lower interest rate. Even a small difference in rate can save you thousands over the life of your loan.',
        'Down Payment: The size of your down payment affects your rate. Lenders typically offer better rates to borrowers who put down 20% or more, as they represent less risk.',
        'Loan Type and Term: Different loan types (conventional, FHA, VA) and terms (15-year, 30-year) come with different rates. Shorter-term loans usually have lower rates but higher monthly payments.',
        'Debt-to-Income Ratio: Lenders look at your DTI to assess your ability to repay. A lower DTI ratio can help you qualify for better rates.',
        'Market Conditions: Economic factors like inflation, employment rates, and overall economic health impact mortgage rates on a macro level.',
        'To get the best rate possible, focus on improving your credit score, saving for a larger down payment, and shopping around with multiple lenders. Even a quarter-point difference in your rate can result in significant savings over time.',
      ],
    },
  ];

  relatedPosts: RelatedPost[] = [
    {
      id: 3,
      title: 'Is Refinancing Right for You?',
      excerpt:
        "Learn when it makes sense to refinance your mortgage and how to determine if you'll benefit.",
    },
    {
      id: 4,
      title: '2026 Housing Market Forecast',
      excerpt:
        'Our experts analyze current trends and provide insights into the housing market.',
    },
    {
      id: 5,
      title: 'How to Improve Your Credit Score',
      excerpt:
        'Proven strategies to boost your credit score before applying for a mortgage.',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.loadPost();
    });
  }

  loadPost() {
    this.post = this.blogPosts.find((p) => p.id === this.postId);
  }
}
