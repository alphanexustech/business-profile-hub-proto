import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputContactComponent } from './output-contact.component';

describe('OutputContactComponent', () => {
  let component: OutputContactComponent;
  let fixture: ComponentFixture<OutputContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
