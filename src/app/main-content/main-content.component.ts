import { Component, OnInit } from '@angular/core';
import { constants } from 'buffer';

interface IStudent{
  id:  number;
  firstName: string;
  lastName: string;
  Course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];
  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Krishan',
      lastName: 'Verma',
      Course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Bill',
      lastName: 'Gates',
      Course: 'Swmming'
    }
    this.students[2] = {
      id: 1,
      firstName: 'Tim',
      lastName: 'Cook',
      Course: 'English'
    }
    this.students[3] = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Biden',
      Course: 'Politics'
    }
  }

  ngOnInit(): void {
  }

  addStudent(){
    console.log('test')
    const student:IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      Course: 'Boxing'
    };
    this.students.push(student);
  }

}
