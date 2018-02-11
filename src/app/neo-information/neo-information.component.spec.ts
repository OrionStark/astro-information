import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoInformationComponent } from './neo-information.component';

describe('NeoInformationComponent', () => {
  let component: NeoInformationComponent;
  let fixture: ComponentFixture<NeoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
