import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMeatsComponent } from './our-meats.component';

describe('OurMeatsComponent', () => {
  let component: OurMeatsComponent;
  let fixture: ComponentFixture<OurMeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
