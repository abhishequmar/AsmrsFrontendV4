import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsSectionComponent } from './artifacts-section.component';

describe('ArtifactsSectionComponent', () => {
  let component: ArtifactsSectionComponent;
  let fixture: ComponentFixture<ArtifactsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
