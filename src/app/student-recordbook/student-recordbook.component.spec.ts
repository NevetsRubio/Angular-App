import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecordbookComponent } from './student-recordbook.component';

describe('StudentRecordbookComponent', () => {
  let component: StudentRecordbookComponent;
  let fixture: ComponentFixture<StudentRecordbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRecordbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecordbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
