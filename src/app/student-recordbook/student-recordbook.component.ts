import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;



@Component({
  selector: 'app-student-recordbook',
  templateUrl: './student-recordbook.component.html',
  styleUrls: ['./student-recordbook.component.scss']
})
export class StudentRecordbookComponent implements OnInit {

  constructor() { }

  student: object = {
    StudentID: '',
    First: '',
    Last: '',
    GPA:'',
    GradeDate: ''
  };

  ngOnInit() {
  }
  Settings_click(event) {
    //Get the value of the button click to determing which was clicked.
    let btn_val = event.srcElement.value;

    //Get Get list of ChildNodes for the row with a button click.
    let StudRow = event.srcElement.parentElement.parentElement.parentElement.childNodes;

    //Give value to fields in modal(s).
    this.student = {
      StudentID: StudRow[0].innerHTML,
      First: StudRow[1].innerHTML,
      Last: StudRow[2].innerHTML,
      GPA: StudRow[3].innerHTML,
      GradDate: StudRow[4].innerHTML
    }

    //Show Modal. This is where I should call the methods to do the CRUD Operations.
    if (btn_val == 'View') {
      jQuery('#ViewModal').modal('toggle')
    } else if (btn_val == 'Update') {
      jQuery('#UpdateModal').modal('toggle');
    } else if (btn_val == 'Delete') {
      jQuery('#DeleteModal').modal('toggle');
    } else {
      //What even just happened?
    }
  }
}