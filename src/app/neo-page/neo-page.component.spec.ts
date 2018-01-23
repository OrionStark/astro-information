import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoPageComponent } from './neo-page.component';

describe('NeoPageComponent', () => {
  let component: NeoPageComponent;
  let fixture: ComponentFixture<NeoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
