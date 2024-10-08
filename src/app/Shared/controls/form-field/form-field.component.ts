import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() label!: string;
  @Input() required!: boolean;
  @Input() isInLine!: boolean;
  @Input() control!: AbstractControl;

  constructor() {
    this.isInLine = true;
  }

  ngOnInit(): void {
// console.log('any')
  }


  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorKey() {
    return this.control && this.control.errors && Object.keys(this.control.errors)[0];
  }
}
