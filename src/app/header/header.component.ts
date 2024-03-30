import { Component } from '@angular/core';
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
}
