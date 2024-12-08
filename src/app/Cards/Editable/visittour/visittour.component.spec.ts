import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisittourComponent } from './visittour.component';

describe('VisittourComponent', () => {
  let component: VisittourComponent;
  let fixture: ComponentFixture<VisittourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisittourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisittourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
