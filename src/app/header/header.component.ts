import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private activateRoute:ActivatedRoute){}
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

  // JumpToSection(section:any){
  //   const element = document.getElementById(section);
  //   if (element) {
  //     element.scrollIntoView({behavior: 'smooth'});
  //     history.replaceState(null, '', window.location.pathname); 
  //   }
  // }
}
