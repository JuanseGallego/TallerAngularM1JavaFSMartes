import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritosStore } from '../../services/favoritos-store';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-encabezado',
  styleUrl: './encabezado.css',
  templateUrl: './encabezado.html',
})
export class Encabezado {
  protected readonly favoritos = inject(FavoritosStore);
  nombreApp = "Huella Amiga";
  esLogan = "Las mascotas mas adorables de la ciudad"
}
