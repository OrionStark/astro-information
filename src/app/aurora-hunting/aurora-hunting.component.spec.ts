import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroraHuntingComponent } from './aurora-hunting.component';

describe('AuroraHuntingComponent', () => {
  let component: AuroraHuntingComponent;
  let fixture: ComponentFixture<AuroraHuntingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuroraHuntingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuroraHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
