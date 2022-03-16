import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  fecha: string="29 de Mayo de 1998";
  provincia: string="Utrera, Sevilla, 41710"
  numero_telefono: string="tel:+34677253320"
  linkedin: string="https://www.linkedin.com/in/pablo-calle-p%C3%A9rez-39a476230/"
  infojobs: string="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=8930708052779106250"
}