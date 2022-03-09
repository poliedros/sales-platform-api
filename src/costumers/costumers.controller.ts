import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Costumer, CostumersService } from './costumers.service';

@Controller('costumers')
export class CostumersController {
  constructor(private readonly costumerService: CostumersService) {}

  @Get()
  async get() {
    return this.costumerService.findAll();
  }

  @Post()
  async create(@Body() costumer: Costumer) {
    return this.costumerService.create(costumer);
  }

  @Put()
  async update(@Body() costumer: Costumer) {
    return this.costumerService.update(costumer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.costumerService.delete(id);
  }
}
