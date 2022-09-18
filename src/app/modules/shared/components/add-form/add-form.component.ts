import {Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'onv-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('appear', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms linear', style({opacity: 1}))
      ]),
    ])
  ]
})
export class AddFormComponent implements OnInit {
  private readonly nameRegex = /(^[A-Z][a-z]{0,9})( [A-Z][a-z]{0,19})?$/;

  @HostBinding('class') baseClass = 'onv-add-form';

  @HostBinding('@appear') appearAnimation = true;

  @Input() isOpen = false;

  @Input() title = '';

  @Output()
  addWithName = new EventEmitter<string>();

  form: FormGroup;

  get nameControl(): FormControl<string> {
    return this.form.controls['name'] as FormControl<string>;
  }

  get name(): string {
    return this.nameControl.value;
  }

  get isPatternError(): boolean {
    return this.nameControl.errors?.['pattern'] && (this.nameControl.touched || this.nameControl.dirty);
  }

  get isRequiredError(): boolean {
    return this.nameControl.errors?.['required'] && (this.nameControl.touched || this.nameControl.dirty);
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initFormControl();
  }

  private initFormControl(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(this.nameRegex)]]
    });
  }

  onAdd(): void {
    this.addWithName.emit(this.name);
  }

}
