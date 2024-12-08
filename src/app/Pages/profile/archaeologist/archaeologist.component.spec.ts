import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchaeologistComponent } from './archaeologist.component';

describe('ArchaeologistComponent', () => {
  let component: ArchaeologistComponent;
  let fixture: ComponentFixture<ArchaeologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchaeologistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchaeologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
