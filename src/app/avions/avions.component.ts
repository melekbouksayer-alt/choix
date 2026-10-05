import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './avions.component.html',
  styleUrl: './avions.component.css'
})
export class AvionsComponent implements OnInit {
  avions: Avion[] = [];

  constructor(private avionService: AvionService) {}

  ngOnInit(): void {
    this.avions = this.avionService.listeAvions();
  }

  supprimerAvion(avion: Avion): void {
    const conf = confirm(`Êtes-vous sûr de vouloir supprimer « ${avion.nomAvion} » ?`);
    if (conf) {
      this.avionService.supprimerAvion(avion);
    }
  }
}
