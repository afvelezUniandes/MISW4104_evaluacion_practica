import { Component, HostListener, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.getVehiculos();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {}

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }
}
