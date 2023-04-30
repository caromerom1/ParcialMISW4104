import { Vehicle } from './vehicle';
import { vehiclesMock } from './vehicle.spec.mock';

describe('Vehicle', () => {
  it('should create an instance', () => {
    const { id, marca, linea, referencia, modelo, kilometraje, color, imagen } =
      vehiclesMock[0];
    expect(
      new Vehicle(
        id,
        marca,
        linea,
        referencia,
        modelo,
        kilometraje,
        color,
        imagen,
      ),
    ).toBeTruthy();
  });
});
