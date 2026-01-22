import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';

export const routes: Routes = [
    { path:'' , component: HeroComponent },
    { path:'about' , component: AboutComponent },
    { path:'skills' , component: SkillsComponent },
    { path: '**', redirectTo: '' }
];
