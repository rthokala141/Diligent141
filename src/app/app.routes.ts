import { Routes } from '@angular/router';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MyPerksComponent } from './pages/my-perks/my-perks.component';
import { MyActivityComponent } from './pages/my-activity/my-activity.component';
import { MyImpactComponent } from './pages/my-impact/my-impact.component';
import { MyFaqComponent } from './pages/my-faq/my-faq.component';

export const routes: Routes = [
     { path: 'my-profile', component: MyProfileComponent , title: 'My Profile' }, 
     { path: 'my-perks', component: MyPerksComponent, title: 'My Perks' },    
     { path: 'my-activity', component: MyActivityComponent, title: 'My Activity' }, 
     { path: 'my-impact', component: MyImpactComponent, title: 'My Impact' },
     { path:'FAQ',component:MyFaqComponent,title:'FAQ'},
     { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
];


export class AppRoutingModule { }