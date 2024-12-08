import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisittourcardComponent } from './visittourcard.component';

describe('VisittourcardComponent', () => {
  let component: VisittourcardComponent;
  let fixture: ComponentFixture<VisittourcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisittourcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisittourcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
