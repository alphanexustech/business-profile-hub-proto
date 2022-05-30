import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSquareComponent } from './logo-square.component';

describe('LogoSquareComponent', () => {
  let component: LogoSquareComponent;
  let fixture: ComponentFixture<LogoSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
