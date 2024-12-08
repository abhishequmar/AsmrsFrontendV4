import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecardComponent } from './sitecard.component';

describe('SitecardComponent', () => {
  let component: SitecardComponent;
  let fixture: ComponentFixture<SitecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
