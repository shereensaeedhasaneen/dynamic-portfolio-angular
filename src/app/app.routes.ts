import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
    { path:'' , component: HeroComponent },
    { path:'about' , component: AboutComponent },
    { path: '**', redirectTo: '' }
];
