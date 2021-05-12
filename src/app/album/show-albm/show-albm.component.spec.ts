import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlbmComponent } from './show-albm.component';

describe('ShowAlbmComponent', () => {
  let component: ShowAlbmComponent;
  let fixture: ComponentFixture<ShowAlbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
