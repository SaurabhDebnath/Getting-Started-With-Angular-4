import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


export const routing = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent }
]);