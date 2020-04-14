import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  greeting = 'r1c2';

  constructor(
    private router: Router
  ) { 
    this.firstName = 'Krishan';
    this.lastName = 'Verma';
  }

  showGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello' + this.firstName + ' ' + this.lastName + '.';
  }
  resetGreeting (){
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
  }

  navigateTo(path: string){
    this.router.navigate([path]);
  }
  
  ngOnInit(): void {
  }

}
