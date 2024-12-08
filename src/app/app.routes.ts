import { Routes } from '@angular/router';
import { AuthComponent } from './Pages/auth/auth.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { PublicationsComponent } from './Pages/publications/publications.component';
import { ToursComponent } from './Pages/tours/tours.component';
import { SitesComponent } from './Pages/sites/sites.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: 'tours', component: ToursComponent },
    { path: 'sites', component: SitesComponent },
    { path: '', component: HomeComponent },
];
