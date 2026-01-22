import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StackComponent } from './components/stack/stack.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, EducationComponent, ExperienceComponent, SkillsComponent, StackComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('CV-WEB-2026-A4-STYLE');
}
