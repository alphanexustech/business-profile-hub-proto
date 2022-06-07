import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLandingComponent } from './output-landing.component';

describe('OutputLandingComponent', () => {
  let component: OutputLandingComponent;
  let fixture: ComponentFixture<OutputLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
