import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-my-profile',
  imports: [  ButtonModule,
    RadioButtonModule,
    CardModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.less'
})
export class MyProfileComponent {
  
}
