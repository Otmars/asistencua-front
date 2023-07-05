import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-boton-principal',
  templateUrl: './boton-principal.component.html',
  styleUrls: ['./boton-principal.component.css'],
  providers: [MessageService,DatePipe],
})
export class BotonPrincipalComponent implements OnInit {
  @ViewChild('Bton') Bton: ElementRef;
  texto: string = 'MARCAR';

  constructor(
    private render: Renderer2,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {}

  click() {
    var date =  this.datePipe.transform(Date.now(), 'HH:mm:ss');
    var x = 1;
    const asContainer = this.Bton.nativeElement;
    this.render.listen(asContainer, 'animationend', (event) => {
      this.render.removeClass(asContainer, 'active');
    });
    setTimeout(() => {
      if (this.texto == 'MARCAR') {
        this.texto = 'SALIDA';
      } else {
        this.texto = 'MARCAR';
      }
      this.messageService.add({
        severity: 'success',
        summary: 'Registro Exitoso',
        detail: 'La hora de registro es: '+date,
        sticky: true
      });
    }, 2500);
    console.log(x++);
  }
}
