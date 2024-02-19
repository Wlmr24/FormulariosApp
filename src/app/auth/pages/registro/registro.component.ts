import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { emailPattern, noPuedeSerStrider, nombreApellidoPattern } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { error } from 'console';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  ngOnInit(): void {
  }

  miFomulario : FormGroup = this.fb.group ({

    nombre: ['',[Validators.required, Validators.pattern(this.validatorservice.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorservice.emailPattern) ], [this.emailValidator]],
    username: ['',[Validators.required, this.validatorservice.noPuedeSerStrider ]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  },{
    validators:  [this.validatorservice.camposIguales('password','password2')]
  })

  get emailErrorMsg(): string {
    const errors = this.miFomulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo'
    } else if (errors?.['emailTomado']) {
      return 'El email ya existe'
    }
    return '';
  }

  constructor(private fb               : FormBuilder,
              private validatorservice : ValidatorService,
              private emailValidator   :EmailValidatorService) {}

  campoNoValido (campo:string) {
    return this.miFomulario.get(campo)?.invalid
    && this.miFomulario.get(campo)?.touched
  }



  // emailRequired() {
  //   return this.miFomulario.get('email')?.errors?.['required']
  //   && this.miFomulario.get('email')?.touched

  // }

  // emailFormato() {
  //   return this.miFomulario.get('email')?.errors?.['pattern']
  //   && this.miFomulario.get('email')?.touched

  // }

  // emailTomado() {
  //   return this.miFomulario.get('email')?.errors?.['emailTomado']
  //   && this.miFomulario.get('email')?.touched

  // }


  submitFormulario () {
    console.log(this.miFomulario.value)

    this.miFomulario.markAllAsTouched()
  }

}
