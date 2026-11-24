import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritosStore } from '../../services/favoritos-store';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';
import { MASCOTAS } from '../../data/mascotas.mock';

@Component({
  imports: [RouterLink, TarjetaMascota],
  selector: 'app-mi-lista',
  styleUrl: './mi-lista.css',
  templateUrl: './mi-lista.html',
})
export class MiLista {
  protected readonly favoritos = inject(FavoritosStore);

  mascotasFavoritas = computed(() =>
    MASCOTAS.filter((mascota) => this.favoritos.esFavorita(mascota.id))
  );
}
