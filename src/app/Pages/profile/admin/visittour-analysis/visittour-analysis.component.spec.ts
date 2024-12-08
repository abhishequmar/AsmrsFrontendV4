import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisittourAnalysisComponent } from './visittour-analysis.component';

describe('VisittourAnalysisComponent', () => {
  let component: VisittourAnalysisComponent;
  let fixture: ComponentFixture<VisittourAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisittourAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisittourAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
