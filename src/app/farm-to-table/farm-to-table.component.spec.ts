import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmToTableComponent } from './farm-to-table.component';

describe('FarmToTableComponent', () => {
  let component: FarmToTableComponent;
  let fixture: ComponentFixture<FarmToTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmToTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmToTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
