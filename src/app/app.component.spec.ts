import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiculoModule } from './vehiculo/vehiculo.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        VehiculoModule,
      ],
      declarations: [AppComponent, VehiculoListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MISW4104_evaluacion_practica'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MISW4104_evaluacion_practica');
  });
});
