import { Component, inject } from '@angular/core';
import { MASCOTAS } from '../../data/mascotas.mock';
import { RouterLink } from '@angular/router';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';
import { FavoritosStore } from '../../services/favoritos-store';

@Component({
  imports: [RouterLink, TarjetaMascota],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  protected readonly favoritos = inject(FavoritosStore);

  disponibles = MASCOTAS.filter((mascota) => !mascota.adoptada).slice(0, 3);
}
