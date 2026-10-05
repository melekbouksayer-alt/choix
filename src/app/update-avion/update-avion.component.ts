import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-update-avion',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './update-avion.component.html',
  styleUrl: './update-avion.component.css'
})
export class UpdateAvionComponent implements OnInit {
  currentAvion = new Avion();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    const avion = this.avionService.consulterAvion(id);

    if (avion) {
      this.currentAvion = avion;
    } else {
      this.router.navigate(['avions']);
    }
  }

  updateAvion(): void {
    this.avionService.updateAvion(this.currentAvion);
    this.router.navigate(['avions']);
  }
}
