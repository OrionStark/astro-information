import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroraLocationInformationComponent } from './aurora-location-information.component';

describe('AuroraLocationInformationComponent', () => {
  let component: AuroraLocationInformationComponent;
  let fixture: ComponentFixture<AuroraLocationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuroraLocationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuroraLocationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
