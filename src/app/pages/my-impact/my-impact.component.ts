import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-my-impact',
  imports: [ CardModule,CommonModule,ButtonModule,CarouselModule],
  templateUrl: './my-impact.component.html',
  styleUrl: './my-impact.component.less'
})
export class MyImpactComponent {
  cards = [
    {
      image: 'myimpact2.png',
      title: "Find A Job",
      description: "Your donations and purchases help fund free career services, connecting people to jobs through coaching, resume help, and job fairs.",
    },
    {
      image: 'myimpact3.png',
      title: "Get Certified",
      description: "Shopping and donating at Goodwill provide funding for employer-valued certification programs, helping individuals gain skills for better-paying jobs.",
    },
    {
      image: 'myimpact4.png',
      title: "We Support You!",
      description: "Goodwill offers a range of programs to support your success, including GED classes, veterans services, tax preparation, and more—all at no cost to you.",
    }
  ];

  donors = [
    { image: 'Avatar icon.png', name: "Mary", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png',name: "John", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png',name: "Terrance", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png',name: "Diego", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png', name: "Mary", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png',name: "John", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png',name: "Terrance", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: 'Avatar icon.png',name: "Diego", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];
  
}
