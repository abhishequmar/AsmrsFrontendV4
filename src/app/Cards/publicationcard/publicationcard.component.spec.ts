import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationcardComponent } from './publicationcard.component';

describe('PublicationcardComponent', () => {
  let component: PublicationcardComponent;
  let fixture: ComponentFixture<PublicationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
