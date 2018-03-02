import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsRoverLandscapeComponent } from './mars-rover-landscape.component';

describe('MarsRoverLandscapeComponent', () => {
  let component: MarsRoverLandscapeComponent;
  let fixture: ComponentFixture<MarsRoverLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsRoverLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoverLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
