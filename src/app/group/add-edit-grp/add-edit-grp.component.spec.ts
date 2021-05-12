import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGrpComponent } from './add-edit-grp.component';

describe('AddEditGrpComponent', () => {
  let component: AddEditGrpComponent;
  let fixture: ComponentFixture<AddEditGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
