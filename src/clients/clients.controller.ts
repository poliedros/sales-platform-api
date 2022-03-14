import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Client, ClientsService } from './clients.service';

@Controller('costumers')
export class CostumersController {
  constructor(private readonly costumerService: ClientsService) {}

  @Get()
  async get() {
    return this.costumerService.findAll();
  }

  @Post()
  async create(@Body() costumer: Client) {
    return this.costumerService.create(costumer);
  }

  @Put()
  async update(@Body() costumer: Client) {
    return this.costumerService.update(costumer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.costumerService.delete(id);
  }
}
