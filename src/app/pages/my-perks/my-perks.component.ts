import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-my-perks',
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ImageModule,
    CarouselModule,
    ToolbarModule,
    TabViewModule
  ],
  templateUrl: './my-perks.component.html',
  styleUrl: './my-perks.component.less'
})
export class MyPerksComponent {
  closePopup() {
    this.isPopupVisible = false;
  }

  isPopupVisible = false;

  openPopup() {
    this.isPopupVisible = true;
  }


  // perks = [
  //   { name: '50% OFF Color of the Week', expiry: '1/1/2025' },
  //   { name: '$1.49 Saturday Deal', expiry: '1/1/2025' },
  //   { name: '$5 OFF Happy Birthday', expiry: '1/1/2025' },
  //   { name: '30% OFF Promotion', expiry: '1/1/2025' },
  //   { name: '5% OFF Thrift Day', expiry: '1/1/2025' },
  //   { name: 'Promotion', expiry: '1/1/2025' },
  //   { name: 'Promotion', expiry: '1/1/2025' },
  //   { name: 'Promotion', expiry: '1/1/2025' },
  //   { name: 'Promotion', expiry: '1/1/2025' }
  // ];

  ngOnInit() {
    console.log('My Perks component loaded!');
  }

  selectedPerk: number = 1;

  togglePerks(perkNumber: number) {
    this.selectedPerk = perkNumber;
  }
}
