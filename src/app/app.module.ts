import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http'; // Nueva API
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VehiculoModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Nueva configuración
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
