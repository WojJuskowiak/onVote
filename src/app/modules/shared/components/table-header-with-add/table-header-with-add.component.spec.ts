import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderWithAddComponent } from './table-header-with-add.component';

describe('TableHeaderWithAddComponent', () => {
  let component: TableHeaderWithAddComponent;
  let fixture: ComponentFixture<TableHeaderWithAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderWithAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeaderWithAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
