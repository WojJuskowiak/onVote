import {Component, forwardRef, HostBinding, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Nullable} from "../../utils/models/nullable.type";
import {isNull} from "../../utils/functions/is-null";

@Component({
  selector: 'onv-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent<T> implements ControlValueAccessor {
  @HostBinding('class') baseClass = 'onv-dropdown';

  @HostBinding('tabindex') tabIndex = 1;

  @HostListener('focus') onFocus(): void {
    if (this.isDisabled) {
      return;
    }
    this.isFocused = true;
  }

  @HostListener('blur') onBlur(): void {
    if (this.isDisabled) {
      return;
    }
    this.isFocused = false;
    this.isOpen = false;
  }

  @HostListener('click') onClick(): void {
    if (this.isDisabled) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  @Input() placeholder: string = '';

  @Input() data: T[];

  @Input() valueTransform: (value: Nullable<T>) => string = value => {
    if (isNull(value)) {
      return '';
    }
    return value as unknown as string;
  };

  onChange: (value: Nullable<T>) => void;

  onTouched: () => void;

  selectedValue: Nullable<T> = null;

  isDisabled = false;

  isFocused = false;

  isOpen = false;

  get isEmpty() {
    return this.selectedValue === null;
  }

  registerOnChange(fn: (value: Nullable<T>) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: Nullable<T>): void {
    console.log(value);
    this.selectedValue = value;
  }

  valueSelected(value: T): void {
    this.writeValue(value);
    this.onChange(value);
  }

}
