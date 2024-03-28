import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { projects } from './projectdata';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectdata = projects;
  gittooltiptext!: string;
  demotooltiptext!: string;


  opentab(i: number) {
    const githubUrl = this.projectdata[i].projectlinks.github;
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
    else {
      console.log("ERROR at url")
    }
  }

  showGitToolTip(i: number) {
    const githubUrl = this.projectdata[i].projectlinks.github;
    if (githubUrl) {
      this.gittooltiptext = "Source Code"
    }
    else {
      this.gittooltiptext = "No Code";
    }
  }

  showDemoToolTip(i: number) {
    const demoUrl = this.projectdata[i].projectlinks.demo;
    if (demoUrl) {
      this.demotooltiptext = "Live Demo"
    }
    else {
      this.demotooltiptext = "No Demo";
    }
  }

}
