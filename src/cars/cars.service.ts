import { Injectable, NotFoundException } from '@nestjs/common';

export interface Car {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corola',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll(): Car[] {
    return this.cars;
  }

  findOneById(id: number): Car {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
