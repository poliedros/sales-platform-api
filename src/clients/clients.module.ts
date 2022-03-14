import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CostumersController } from './clients.controller';

@Module({
  providers: [ClientsService],
  controllers: [CostumersController],
})
export class CostumersModule {}
