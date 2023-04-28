import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    NgbModule,
    VehicleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
