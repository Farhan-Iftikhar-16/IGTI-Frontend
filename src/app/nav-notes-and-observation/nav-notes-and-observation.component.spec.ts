import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNotesAndObservationComponent } from './nav-notes-and-observation.component';

describe('NavNotesAndObservationComponent', () => {
  let component: NavNotesAndObservationComponent;
  let fixture: ComponentFixture<NavNotesAndObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNotesAndObservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNotesAndObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
