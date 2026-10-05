import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-add-avion',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-avion.component.html',
  styleUrl: './add-avion.component.css'
})
export class AddAvionComponent {
  newAvion = new Avion();

  constructor(
    private avionService: AvionService,
    private router: Router
  ) {}

  addAvion(): void {
    if (!this.newAvion.nomAvion || !this.newAvion.modele || !this.newAvion.capacite || !this.newAvion.dateMiseEnService) {
      return;
    }

    this.avionService.ajouterAvion(this.newAvion);
    this.router.navigate(['avions']);
  }
}
