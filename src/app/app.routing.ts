import { Routes, RouterModule } from '@angular/router';

import { SecondPageComponent } from './secondPage';
import { HomePageComponent } from './homePage';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'secondPage', component: SecondPageComponent },
  // Otherwise redirect to:
  { path: '**', redirectTo: ''},
];

export const AppRoutingModule = RouterModule.forRoot(routes);
