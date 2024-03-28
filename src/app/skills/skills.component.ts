import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faJava, faPython } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  faJava = faJava;
  faPy = faPython;
  faAngular = faAngular;
}
