import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  avions: Avion[];
  avion!: Avion;

  constructor() {
    this.avions = [
      {
        idAvion: 1,
        nomAvion: 'Emirates A380',
        modele: 'Airbus A380-800',
        capacite: 517,
        dateMiseEnService: new Date('2010-08-01')
      },
      {
        idAvion: 2,
        nomAvion: 'Boeing 777-300ER',
        modele: 'Boeing 777-300ER',
        capacite: 427,
        dateMiseEnService: new Date('2012-03-15')
      },
      {
        idAvion: 3,
        nomAvion: 'Airbus A350',
        modele: 'Airbus A350-900',
        capacite: 325,
        dateMiseEnService: new Date('2024-01-20')
      }
    ];
  }

  listeAvions(): Avion[] {
    return this.avions;
  }

  ajouterAvion(avion: Avion): void {
    this.avions.push(avion);
  }

  supprimerAvion(avion: Avion): void {
    const index = this.avions.indexOf(avion, 0);
    if (index > -1) {
      this.avions.splice(index, 1);
    }
  }

  consulterAvion(id: number): Avion {
    this.avion = this.avions.find(a => a.idAvion == id)!;
    return this.avion;
  }

  updateAvion(avion: Avion): void {
    const index = this.avions.findIndex(a => a.idAvion === avion.idAvion);
    if (index > -1) {
      this.avions.splice(index, 1);
      this.avions.splice(index, 0, avion);
    }
  }
}
