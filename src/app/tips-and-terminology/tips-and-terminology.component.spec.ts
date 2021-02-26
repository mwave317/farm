import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAndTerminologyComponent } from './tips-and-terminology.component';

describe('TipsAndTerminologyComponent', () => {
  let component: TipsAndTerminologyComponent;
  let fixture: ComponentFixture<TipsAndTerminologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsAndTerminologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsAndTerminologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
