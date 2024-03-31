import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private activateRoute:ActivatedRoute){}

  faNav = faNavicon;
  isOpened:boolean = false;

  ngOnInit(){
    this.activateRoute.fragment.subscribe(
      (data) => {
        console.log(data);
        this.JumpToSection(data);
      }
    );
  }

  JumpToSection(section:any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  @ViewChild('navrouter') navrouter!:ElementRef;
  openNav() {
    this.isOpened = !this.isOpened;
    if (this.navrouter) {
      if (this.isOpened) {
        this.navrouter.nativeElement.classList.add('open');
      } else {
        this.navrouter.nativeElement.classList.remove('open');
      }
    }
  }
  
}
