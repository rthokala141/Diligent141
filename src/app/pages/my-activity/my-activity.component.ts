import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-my-activity',
  imports: [ CommonModule,  
    CardModule,
    ButtonModule,
    TableModule],
  templateUrl: './my-activity.component.html',
  styleUrl: './my-activity.component.less'
})
export class MyActivityComponent {
  
  transactions  = [
    { date: '12/16/2024', type: 'Purchase', location: 'Midtown Goodwill', total: '$12.34' },
    { date: '12/16/2024', type: 'Purchase', location: 'Phenix City Goodwill', total: '$5.67' },
    { date: '12/16/2024', type: 'Donation', location: 'Phenix City Goodwill', total: '1' },
    { date: '12/16/2024', type: 'Purchase', location: 'Midtown Goodwill', total: '$45.67' },
    { date: '12/16/2024', type: 'Purchase', location: 'Midtown Goodwill', total: '$3.45' }
  ];
}
