import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.css'
})
export class SwitchesComponent {

  persona = {
    genero: 'F',
    notificaciones : true
  }

  terminosycondiciones:boolean = false


}
