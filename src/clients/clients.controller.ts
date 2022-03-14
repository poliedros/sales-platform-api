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

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async get() {
    return this.clientsService.findAll();
  }

  @Post()
  async create(@Body() costumer: Client) {
    return this.clientsService.create(costumer);
  }

  @Put()
  async update(@Body() costumer: Client) {
    return this.clientsService.update(costumer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clientsService.delete(id);
  }
}
