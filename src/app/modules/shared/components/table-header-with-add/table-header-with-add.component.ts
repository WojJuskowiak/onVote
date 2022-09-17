import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'onv-table-header-with-add',
  templateUrl: './table-header-with-add.component.html',
  styleUrls: ['./table-header-with-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableHeaderWithAddComponent {
  @Input() header = '';

  @Output() addClicked = new EventEmitter<void>;

  onAdd() {
    this.addClicked.emit();
  }
}
