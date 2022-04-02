import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './schemas/client.schema';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async get() {
    return this.clientsService.findAll();
  }

  @Get(':name')
  async getByName(@Param('name') clientName: string) {
    const client = await this.clientsService.findByName(clientName);

    if (client) return client;

    throw new NotFoundException('Client not found');
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

  @Post(':name/send-email')
  async sendEmail(@Body() email: string) {
    return true;
  }
}
