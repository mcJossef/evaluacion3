import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  img2 = "./alexa.jpg"
  img3 = "./audifonos.jpg"
  img4 = "./impresora.jpg"
  img5 = "./mouse.jpg"
  img6 = "./pantalla.jpg"
  img7 = "./teclado.jpg"
}
