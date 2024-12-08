import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAnalysisComponent } from './site-analysis.component';

describe('SiteAnalysisComponent', () => {
  let component: SiteAnalysisComponent;
  let fixture: ComponentFixture<SiteAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
