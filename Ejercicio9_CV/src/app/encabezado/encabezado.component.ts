import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
   titulo : string = "Curriculum Vitae de Pablo Calle Pérez";
   dedicacion : string = "Ingeniero Informática - Ingeniero Software"
}