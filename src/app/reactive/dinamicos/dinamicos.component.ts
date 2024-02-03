import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-dinamicos:not(p)',
  templateUrl: './dinamicos.component.html',
  styleUrl: './dinamicos.component.css'
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) {}

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array ( [
      ['Halo', Validators.required ],
      ['Gears of war', Validators.required ]
    ], Validators.required )
  })

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid) {return}

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required )),
    this.nuevoFavorito.reset()
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
      return this.miFormulario.get('favoritos') as FormArray
  }

  guardar(){

  if (this.miFormulario.invalid) {
    this.miFormulario.markAllAsTouched()
    return
  }
    console.log(this.miFormulario.value)
  }

  eliminar( index: number ) {
    this.favoritosArr.removeAt(index);
  }

  //Valida las condiciones por campo
  campoValido (campo :string) {
    return this.miFormulario.controls?.[campo].errors
           && this.miFormulario.controls?.[campo].touched;
  }

}
