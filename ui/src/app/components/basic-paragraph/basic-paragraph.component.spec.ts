import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicParagraphComponent } from './basic-paragraph.component';

describe('BasicParagraphComponent', () => {
  let component: BasicParagraphComponent;
  let fixture: ComponentFixture<BasicParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
