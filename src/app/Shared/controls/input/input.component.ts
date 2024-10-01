import { Component, Input, OnInit, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()=> InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
 @Input() placeholder: string = '';
 @Output() changed = new EventEmitter<string>();
 
 
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }
  value: string = '';
  isDisable: boolean = false;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  private propagateChange: any = () => {}
  private propagateTouched: any = () => {}

  writeValue(value:string): void{
    this.value = value
  }
  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }
  setDisableState(isDisabled: boolean): void{}

  OnKeyUp(event : Event ): void {
    // this.value = value;
    const { target } = event;
    this.value = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur() : void {
    this.propagateTouched();
  }
}
