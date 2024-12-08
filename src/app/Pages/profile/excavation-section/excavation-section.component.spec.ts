import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavationSectionComponent } from './excavation-section.component';

describe('ExcavationSectionComponent', () => {
  let component: ExcavationSectionComponent;
  let fixture: ComponentFixture<ExcavationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcavationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcavationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
