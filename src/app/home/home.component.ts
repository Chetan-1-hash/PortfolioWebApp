  import { Observable, interval } from 'rxjs';
  import { map, takeWhile } from 'rxjs/operators';
  import { Component, ElementRef, ViewChild } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  @Component({
    selector: 'app-home',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
  })
  export class HomeComponent {
    faEmail = faEnvelope;
    faLinkedIn = faLinkedin;
    faInsta = faInstagram;
    faHackerRank = faHackerrank;
    faGithub = faGithub;

    text: string = "Web Developer";
    typedText = "";

    @ViewChild('designation') designation!: ElementRef;

    ngOnInit() {
      this.writeText();
    }

    writeText() {
      const speed = 300;
      let idx = 0;
      let direction = 1;
  
      const type = () => {
        if (direction === 1) {
          if (idx < this.text.length) {
            this.typedText = this.text.slice(0, idx + 1);
            idx++;
          } 
          else {
            direction = -1; // Change direction to reverse
          }
        } 
        else {
          if (idx > 0) {
            this.typedText = this.text.slice(0, idx);
            idx--;
          } 
          else {
            direction = 1; // Change direction to forward
          }
        }
  
        setTimeout(type, speed); // Call type function recursively after a delay
      };
  
      type(); // Start the typing animation
    }
    
  }
