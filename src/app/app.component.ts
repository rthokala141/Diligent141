import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ImageModule,
    CarouselModule,
    ToolbarModule,
    TabViewModule,
    CardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {

  @ViewChild('carousel', { static: false }) carousel!: Carousel;

  constructor(private router: Router) { }

  bannerImages = ['profile-banner.jpg'];
  footerImages = ['footer.png'];
  showButton: boolean = false;
  showButtonforImapact: boolean = false;
  // isPopupVisible = false;

  menuItems = [
    { link: '/my-profile', label: 'My Profile' },
    { link: '/my-perks', label: 'My Perks' },
    { link: '/my-activity', label: 'My Activity' },
    { link: '/my-impact', label: 'My Impact' },
    { link: '/FAQ', label: 'FAQ' }
  ];

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateBanner(event.urlAfterRedirects);
      }
    });
  }

  updateBanner(url: string): void {
    switch (url) {
      case '/my-profile':
        this.bannerImages = ['profile-banner.jpg'];
        this.showButton = true;
        this.footerImages = ['footer.jpg'];
        this.showButtonforImapact = false;
        break;
      case '/my-perks':
        this.bannerImages = ['perks-banner.jpg'];
        this.showButton = true;
        this.footerImages = ['/footer.jpg'];
        this.showButtonforImapact = false;
        break;
      case '/my-activity':
        this.bannerImages = ['activity-banner.jpg'];
        this.showButton = true;
        this.footerImages = ['footer.jpg'];
        this.showButtonforImapact = false;
        break;
      case '/my-impact':
        this.bannerImages = ['impact-banner.jpg'];
        this.showButton = false;
        this.showButtonforImapact = true;
        break;
      case '/FAQ':
        this.bannerImages = ['faq-banner.jpg'];
        this.showButton = false;
        this.showButtonforImapact = false;
        break;
      default:
        this.bannerImages = ['profile-banner.jpg'];
        this.showButton = true;
    }
  }

  // openPopup() {
  //   this.isPopupVisible = true;
  // }

  // closePopup() {
  //   this.isPopupVisible = false;
  // }

  successStories = [
    {
      image: '/Avatar icon.png',
      name: 'Raviteja',
      description: 'SE'
    },
    {
      image: '/Avatar icon.png',
      name: 'Anitha',
      description: 'QA'
    },
    {
      image: '/Avatar icon.png',
      name : 'Skandha',
      description: 'SA'
    }
  ];

  donors = [
    { name: "Mary", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique blandit." },
    { name: "John", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique blandit." },
    { name: "Terrance", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique blandit." },
    { name: "Diego", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique blandit." }
  ];

  //   scrollLeft() {
  //     if (this.carousel) {
  //       this.carousel.navBackward(new MouseEvent('click')); // Simulate left scroll
  //     }
  //   }

  //   scrollRight() {
  //     if (this.carousel) {
  //       this.carousel.navForward(new MouseEvent('click')); // Simulate right scroll
  //     }
  //  }


}
