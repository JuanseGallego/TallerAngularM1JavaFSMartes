import { Component, computed, inject, signal } from '@angular/core';
import { MASCOTAS } from '../../data/mascotas.mock';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';
import { compatForm } from '@angular/forms/signals/compat';
import { FavoritosStore } from '../../services/favoritos-store';

@Component({
  imports: [TarjetaMascota],
  selector: 'app-listado-mascotas',
  styleUrl: './listado-mascotas.css',
  templateUrl: './listado-mascotas.html',
})
export class ListadoMascotas {
  mascotas = MASCOTAS;

  busqueda = signal('');
  disponible = signal(false);

  protected readonly favoritos = inject(FavoritosStore);

  listaFiltrada = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();
    const soloDisponibles = this.disponible();

    return this.mascotas.filter(
      (mascota) =>
        mascota.nombre.toLowerCase().includes(texto) && (!soloDisponibles || !mascota.adoptada)
    );
  });

}
