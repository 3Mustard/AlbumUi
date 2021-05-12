import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAlbmComponent } from './add-edit-albm.component';

describe('AddEditAlbmComponent', () => {
  let component: AddEditAlbmComponent;
  let fixture: ComponentFixture<AddEditAlbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAlbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAlbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
