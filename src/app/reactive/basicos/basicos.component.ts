import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-basicos:not(p)',
  templateUrl: './basicos.component.html',
  styleUrl: './basicos.component.css'
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl('RTX 4080ti'),
  //   'precio'     : new FormControl(1500),
  //   'existencias': new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre     : [, [Validators.required, Validators.minLength(3)]],
    precio     : [, [Validators.required, Validators.min(0), ]],
    existencias: [, [Validators.required,  Validators.min(1), ]]
  })

  guardar(){
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }

  // Valida las condiciones por campo
  // campoValido (campo :string) {
  //   this.miFormulario.controls?.[campo].errors
  // }

  constructor(private fb: FormBuilder){}



}
