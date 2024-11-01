import { Component, HostListener, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

interface VehiculosPorMarca {
  marca: string;
  total: number;
}
@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  vehiculosPorMarca: VehiculosPorMarca[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.getVehiculos();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {}

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.contarVehiculosPorMarca();
      console.log(this.vehiculosPorMarca);
    });
  }

  contarVehiculosPorMarca(): void {
    const contador: { [marca: string]: number } = this.vehiculos.reduce(
      (acc: { [marca: string]: number }, vehiculo) => {
        acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
        return acc;
      },
      {} as { [marca: string]: number }
    );

    this.vehiculosPorMarca = Object.keys(contador).map((marca) => ({
      marca,
      total: contador[marca],
    }));
  }
}
