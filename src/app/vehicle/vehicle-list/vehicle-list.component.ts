import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles$!: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }
}
