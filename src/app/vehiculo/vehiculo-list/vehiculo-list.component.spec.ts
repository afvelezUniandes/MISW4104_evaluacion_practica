import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiculoListComponent } from './vehiculo.component';
import { VehiculoService } from '../vehiculo.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let vehiculoService: VehiculoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculoListComponent],
      providers: [VehiculoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    vehiculoService = TestBed.inject(VehiculoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of vehicles in the table', () => {
    const mockVehiculos: Vehiculo[] = [
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

    spyOn(vehiculoService, 'getVehiculos').and.returnValue(of(mockVehiculos));

    fixture.detectChanges(); // Trigger initial data binding

    // Verificar el encabezado de la tabla
    const headerCells = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headerCells.length).toBe(4);
    expect(headerCells[0].nativeElement.textContent).toContain('#');
    expect(headerCells[1].nativeElement.textContent).toContain('Marca');
    expect(headerCells[2].nativeElement.textContent).toContain('Linea');
    expect(headerCells[3].nativeElement.textContent).toContain('Modelo');

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);

    const firstRowCells = rows[0].queryAll(By.css('td'));
    expect(firstRowCells[0].nativeElement.textContent).toContain('1');
    expect(firstRowCells[1].nativeElement.textContent).toContain('marca 1');
    expect(firstRowCells[2].nativeElement.textContent).toContain('linea 1');
    expect(firstRowCells[3].nativeElement.textContent).toContain('2021');

    const secondRowCells = rows[1].queryAll(By.css('td'));
    expect(secondRowCells[0].nativeElement.textContent).toContain('2');
    expect(secondRowCells[1].nativeElement.textContent).toContain('marca 2');
    expect(secondRowCells[2].nativeElement.textContent).toContain('linea 2');
    expect(secondRowCells[3].nativeElement.textContent).toContain('2022');

    const thirdRowCells = rows[2].queryAll(By.css('td'));
    expect(thirdRowCells[0].nativeElement.textContent).toContain('3');
    expect(thirdRowCells[1].nativeElement.textContent).toContain('marca 3');
    expect(thirdRowCells[2].nativeElement.textContent).toContain('linea 3');
    expect(thirdRowCells[3].nativeElement.textContent).toContain('2023');
  });
});
