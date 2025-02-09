import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetMeCookComponent } from './let-me-cook.component';

describe('LetMeCookComponent', () => {
  let component: LetMeCookComponent;
  let fixture: ComponentFixture<LetMeCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetMeCookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetMeCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
