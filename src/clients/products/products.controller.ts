import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService, Product } from '../clients.service';

@Controller('clients/:client_id')
export class ProductsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/products')
  async get(@Param('client_id') clientId) {
    return this.clientsService.findProductsByClientId(clientId);
  }

  @Get('/products/:product_id')
  async getById(@Param('client_id') clientId, @Param('product_id') productId) {
    return this.clientsService.findProductByClientIdAndProductId(
      clientId,
      productId,
    );
  }

  @Post('/products')
  async create(@Param('client_id') clientId, @Body() product: Product) {
    product.clientId = clientId;
    return this.clientsService.createProduct(product);
  }

  @Put('/products')
  async update(@Body('client_id') clientId, @Body() product: Product) {
    return this.clientsService.updateProduct(clientId, product);
  }

  @Delete('/products/:product_id')
  async delete(
    @Param('client_id') clientId,
    @Param('product_id') productId: string,
  ) {
    return this.clientsService.deleteProductByClientId(clientId, productId);
  }
}
