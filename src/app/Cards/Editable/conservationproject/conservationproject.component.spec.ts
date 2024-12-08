import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservationprojectComponent } from './conservationproject.component';

describe('ConservationprojectComponent', () => {
  let component: ConservationprojectComponent;
  let fixture: ComponentFixture<ConservationprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConservationprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConservationprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
