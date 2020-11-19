import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaptopComponent } from './all-laptop.component';

describe('AllLaptopComponent', () => {
  let component: AllLaptopComponent;
  let fixture: ComponentFixture<AllLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
