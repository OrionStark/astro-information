import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoDatePageComponent } from './neo-date-page.component';

describe('NeoDatePageComponent', () => {
  let component: NeoDatePageComponent;
  let fixture: ComponentFixture<NeoDatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoDatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoDatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
