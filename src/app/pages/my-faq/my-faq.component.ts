import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-faq',
  imports: [CommonModule],
  templateUrl: './my-faq.component.html',
  styleUrl: './my-faq.component.less'
})
export class MyFaqComponent {
  faqs = [
    { question: 'When and how will I get discounts or coupons?', 
      answer: 'The more you visit, the more savings youll receive. Make sure you are providing your phone number at check out and when donating, so the system can recognize your visit. These visits may trigger the delivery of discounts to your email and/or text (depending on your preferred form of contact). Goodwill will also send out surprise offers including birthday gifts, special sale, BOGOs, rewards and more' 
    },
    { question: 'Can I use my membership at all Goodwill Stores?', 
      answer: 'Yes, as long as it is one of the 16 Goodwill Southern Rivers locations (excluding the Outlet). For a list of locations, please visit our website Retail Stores — Goodwill Southern Rivers.' 
    },
    { question: 'How do I join?', 
      answer: 'You can register online or provide your phone number to the cashier...' 
    },
    { question: 'Why not offer points?', 
      answer: 'Our goal is to make your engagement with Goodwill exciting...' 
    },
    { question: 'Why do I have to provide my birthday?',
      answer: 'Providing your birthday allows us to send you a special birthday offer...'
    },
    { question: 'Do discounts and coupons expire?', 
      answer: 'Yes. Special offers do expire. You will receive a text and/or email...' 
    },
    { question: 'Do I have to be a member to receive Goodwill discounts?',
       answer: 'No, but as a member you will receive additional exclusive offers...' 
    }
  ];
  openedIndex: number | null = null;

  toggleFaq(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
