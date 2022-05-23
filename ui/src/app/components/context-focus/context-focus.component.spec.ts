import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextFocusComponent } from './context-focus.component';

describe('ContextFocusComponent', () => {
  let component: ContextFocusComponent;
  let fixture: ComponentFixture<ContextFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
