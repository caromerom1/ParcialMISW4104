import { Component, OnInit } from '@angular/core';
import { map, Observable, share } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

interface VehicleBrandCount {
  brand: string;
  count: number;
}

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles$!: Observable<Vehicle[]>;

  vehicleBrandsCount$!: Observable<VehicleBrandCount[]>;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    const vehicles$ = this.vehicleService.getVehicles().pipe(share());

    this.vehicles$ = vehicles$;

    this.vehicleBrandsCount$ = vehicles$.pipe(
      map(vehicles => {
        const brandsCount = new Map<string, number>();
        vehicles.forEach(vehicle => {
          const brand = vehicle.marca;
          const count = brandsCount.get(brand) || 0;
          brandsCount.set(brand, count + 1);
        });
        return Array.from(brandsCount.entries()).map(([brand, count]) => ({
          brand,
          count,
        }));
      }),
    );
  }
}
