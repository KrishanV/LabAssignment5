import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  constructor() {
      this.firstName = 'Krishan';
      this.lastName = 'Verma';
  }

  showGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello' + this.firstName + ' ' + this.lastName + '.';
      //console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName:', this.lastName);
      // const row2 = document.getElementById("r1c2");
      // console.log('row2', row2, 'document', document);
      // row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.'
  }
  resetGreeting (){
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
      // const row2 = document.getElementById("r1c2");
      // console.log('row2', row2, 'document', document);
      // row2.innerHTML = 'r1c2';
  }
  
  ngOnInit(): void {
  }

}
