import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputAboutComponent } from './output-about.component';

describe('OutputAboutComponent', () => {
  let component: OutputAboutComponent;
  let fixture: ComponentFixture<OutputAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
