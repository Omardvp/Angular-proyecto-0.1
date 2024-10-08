import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// import { log } from 'console';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {
 form!: FormGroup;
 isInline!: boolean;

 constructor(private fb: FormBuilder) {

 }

 ngOnInit(): void {
  this.form = this.fb.group({
    input: [null, {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }]
  });
 }

 onPatchValue(): void {
  this.form.patchValue({input: 'Omar Martinez'});
 }

 onSubmit(): void {
  console.log('Presiono boton submit')
 }

 organizarElemento() {
  this.isInline = !this.isInline;
 }
}
