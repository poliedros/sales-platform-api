import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService, Product } from '../clients.service';

@Controller('clients/:client_name')
export class ProductsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/products')
  async get(@Param('client_name') clientName) {
    return this.clientsService.findProductsByClientName(clientName);
  }

  @Get('/products/:product_id')
  async getById(
    @Param('client_name') clientName,
    @Param('product_id') productId,
  ) {
    const product =
      await this.clientsService.findProductByClientNameAndProductId(
        clientName,
        productId,
      );

    if (product) return product;

    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  @Post('/products')
  async create(@Param('client_name') clientName, @Body() product: Product) {
    const client = await this.clientsService.findByName(clientName);

    product.clientId = client.id;
    return this.clientsService.createProduct(product);
  }

  @Put('/products')
  async update(@Body('client_name') clientName, @Body() product: Product) {
    return this.clientsService.updateProductByClientName(clientName, product);
  }

  @Delete('/products/:product_id')
  async delete(
    @Param('client_name') clientName,
    @Param('product_id') productId: string,
  ) {
    return this.clientsService.deleteProductByClientName(clientName, productId);
  }
}
