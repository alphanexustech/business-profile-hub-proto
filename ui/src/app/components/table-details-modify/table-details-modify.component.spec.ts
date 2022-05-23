import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailsModifyComponent } from './table-details-modify.component';

describe('TableDetailsModifyComponent', () => {
  let component: TableDetailsModifyComponent;
  let fixture: ComponentFixture<TableDetailsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDetailsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetailsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
