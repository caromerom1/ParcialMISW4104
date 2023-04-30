import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { VehicleService } from '../vehicle.service';
import { vehiclesMock } from '../vehicle.spec.mock';

import { VehicleListComponent } from './vehicle-list.component';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let el: DebugElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let vehicleService: any;

  beforeEach(async () => {
    const vehicleServiceSpy = jasmine.createSpyObj('VehicleService', ['getVehicles']);
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ VehicleListComponent ],
      providers: [ {provide: VehicleService, useValue: vehicleServiceSpy} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    vehicleService = TestBed.inject(VehicleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 row in the header', () => {
    vehicleService.getVehicles.and.returnValue(of(vehiclesMock));
    fixture.detectChanges();

    const header = el.queryAll(By.css('thead tr'));

    expect(header.length).toBe(1);
  })

  it('should have 3 rows in the body', () => {
    vehicleService.getVehicles.and.returnValue(of(vehiclesMock));
    fixture.detectChanges();

    const rows = el.queryAll(By.css('tbody tr'));

    expect(rows.length).toBe(3);
  });
});
