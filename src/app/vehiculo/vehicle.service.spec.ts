/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment.development';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';

describe('Service: Vehiculo', () => {
  let service: VehiculoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService],
    });
    service = TestBed.inject(VehiculoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch directors as an Observable', () => {
    const dummyVehiculos: Vehiculo[] = [
      {
        id: 1,
        marca: 'marca 1',
        linea: 'linea 1',
        referencia: 'referencia 1',
        modelo: 2021,
        kilometraje: 1000,
        color: 'color 1',
        imagen: 'imagen 1',
      },
      {
        id: 2,
        marca: 'marca 2',
        linea: 'linea 2',
        referencia: 'referencia 2',
        modelo: 2022,
        kilometraje: 2000,
        color: 'color 2',
        imagen: 'imagen 2',
      },
      {
        id: 3,
        marca: 'marca 3',
        linea: 'linea 3',
        referencia: 'referencia 3',
        modelo: 2023,
        kilometraje: 3000,
        color: 'color 3',
        imagen: 'imagen 3',
      },
    ];

    service.getVehiculos().subscribe((vehiculos) => {
      expect(vehiculos.length).toBe(3);
      expect(vehiculos).toEqual(dummyVehiculos);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVehiculos);
  });
});
