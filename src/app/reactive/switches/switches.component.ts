import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches:not(p)',
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.css'
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [ true, Validators.required],
    condiciones: [ false, Validators.requiredTrue]

  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
   this.miFormulario.reset({
    ...this.persona,
    condiciones: false
    })
  }

  guardar(){

  }

}
