import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCard(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCard(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return { ...body, id };
  }

  @Delete(':id')
  deleteCard(@Param('id', ParseIntPipe) id: number) {
    return { method: 'DELETE', id };
  }
}
