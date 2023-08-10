import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  fecha: number = Date.now()
  hora :any;
  constructor(){
  //   document.addEventListener('keyup', function() {
  //     console.log('keys pressed');
  //  });
  }
  ngOnInit(){
    this.mostrarHora()
  }
 
  mostrarHora(){
    this.hora = new Date();
    console.log(this.hora);
    setInterval(()=>{
      this.hora = new Date();
    },1000)
  }
}
