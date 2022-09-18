import {Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewEncapsulation} from '@angular/core';
import {Nullable} from "../../../utils/models/nullable.type";

@Component({
  selector: 'onv-dropdown-row',
  templateUrl: './dropdown-row.component.html',
  styleUrls: ['./dropdown-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownRowComponent<T> {
  @HostBinding('class') baseClass = 'onv-dropdown-row'

  @HostListener('click') onClick(): void {
    this.valueSelected.emit(this.value);
  }

  @Input() value: T;

  @Input() valueTransform: (value: Nullable<T>) => string;

  @Output() valueSelected = new EventEmitter<T>();
}
