import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"aboutme", component:AboutmeComponent},
    {path:"experience", component:ExperienceComponent},
    {path:"achievements", component:AchievementsComponent},
    {path:"skills", component:SkillsComponent},
    {path:"contact", component:ContactComponent},
    {path:"projects", component:ProjectsComponent},
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"**", redirectTo:'home', pathMatch:'full'},
];
