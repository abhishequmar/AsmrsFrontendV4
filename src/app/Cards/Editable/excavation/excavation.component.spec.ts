import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavationComponent } from './excavation.component';

describe('ExcavationComponent', () => {
  let component: ExcavationComponent;
  let fixture: ComponentFixture<ExcavationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcavationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcavationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
