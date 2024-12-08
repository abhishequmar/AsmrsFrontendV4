import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactAnalysisComponent } from './artifact-analysis.component';

describe('ArtifactAnalysisComponent', () => {
  let component: ArtifactAnalysisComponent;
  let fixture: ComponentFixture<ArtifactAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
