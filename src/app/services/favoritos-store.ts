import { computed, Service, signal } from '@angular/core';

@Service()
export class FavoritosStore {
    private readonly idsMarcados = signal<number[]>([]);
    readonly ids = this.idsMarcados.asReadonly();

    readonly total = computed(() => {
        let total = 0;
        for (const id of this.idsMarcados()) total += 1;
        return total;
    });

    alternar(id: number): void {
        this.idsMarcados.update((idsMarcados) => {
            const yaFavorito = idsMarcados.some((idMascota) => idMascota === id);
            if (!yaFavorito) return [...idsMarcados, id];
            return idsMarcados.filter((idMascota) => idMascota !== id);
        });
    }

    esFavorita(id: number): boolean {
        return this.idsMarcados().includes(id);
    }
}
