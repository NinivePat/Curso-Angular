import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //template: "<p>Aqui iria un empleado</p>",
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]

})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";

  apellido = "Diaz";

  edad = 28;

  empresa="Pildoras Informaticas";



  /*getEdad(){
    
    return this.edad;
  }*/

  habilitacionCuadro = true;

  usuRegistrado = false;

  textoDeRegistro = "No hay nadie registrado";


  getRegistroUsario() {

    this.usuRegistrado = false;
  }


  setusuariRegistrado(event: Event) {

    //alert("El usuario se acaba de registrar");

    //this.textoDeRegistro="El usuario se acaba de registar";

    if ((<HTMLInputElement>event.target).value == "si") {

      this.textoDeRegistro = ("El usuario se acaba de registrar");

    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }

  }

  constructor() { }

  ngOnInit(): void {
  }
}
