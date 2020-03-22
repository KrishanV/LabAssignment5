import { Component, OnInit } from '@angular/core';
import { constants } from 'buffer';

interface IStudent{
  id:  number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

    studentArray: Array<IStudent> = [];
  constructor(){}

ngOnInit(): void{
  this.studentArray = [
      {
        id: 1,
        firstName: 'Krishan',
        lastName: 'Verma',
        course: 'Programming'
      },
      {
        id: 2,
        firstName: 'Mike',
        lastName: 'Tyson',
        course: 'Boxing'
      },
      {
        id: 3,
        firstName: 'Mohammad',
        lastName: 'Ali',
        course: 'Super Boxing'
      }
    ];
  }

  addStudent(){
    this.studentArray.unshift({
        id: 1,
        firstName: 'Krishan',
        lastName: 'Verma',
        course: 'Programming'
    });
  }

  removeStudent(index: number){
    this.studentArray.splice(index, 1);
  }
}
