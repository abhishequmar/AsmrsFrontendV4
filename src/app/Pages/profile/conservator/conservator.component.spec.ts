import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservatorComponent } from './conservator.component';

describe('ConservatorComponent', () => {
  let component: ConservatorComponent;
  let fixture: ComponentFixture<ConservatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConservatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConservatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
