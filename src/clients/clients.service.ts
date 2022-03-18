import { Injectable } from '@nestjs/common';

export class Client {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  email: string;
  address: string;
  additionalInfo: string;
  code: string;
  products: Product[];
}

export class Product {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  label: string;
  note: string;
  code: string;
  clientId: string;
}

@Injectable()
export class ClientsService {
  clients: Client[] = [
    {
      id: '1',
      name: 'PizzaABeca',
      type: 'Good guy',
      phoneNumber: '123132',
      email: 'anderson@md.ie',
      address: '1 wd',
      additionalInfo: 'a very good costumer',
      code: '1',
      products: [
        {
          id: '1',
          name: 'Anderson Water',
          type: 'Drinkable',
          description: 'A water for thirsty people',
          price: 1,
          quantity: 12,
          image: 'a image must go here',
          label: '123',
          note: 'Irish spring water',
          code: '1',
          clientId: '1',
        },
      ],
    },
    {
      id: '2',
      name: 'PizzariaDoCarlos',
      type: 'Family Guy',
      phoneNumber: '123132',
      email: 'carlos@md.ie',
      address: '1 wd',
      additionalInfo: 'a very very good costumer',
      code: '2',
      products: [
        {
          id: '1',
          name: 'Carlos Water',
          type: 'Drinkable',
          description: 'A water for thirsty people',
          price: 1,
          quantity: 12,
          image: 'a image must go here',
          label: '123',
          note: 'Irish spring water',
          code: '1',
          clientId: '2',
        },
      ],
    },
  ];

  async findAll(): Promise<Client[]> | undefined {
    return this.clients;
  }

  async findById(id: string): Promise<Client> | undefined {
    return this.clients.find((client) => client.id === id);
  }

  async findByName(clientName: string): Promise<Client> | undefined {
    return this.clients.find((client) => client.name === clientName);
  }

  async create(client: Client): Promise<Client> {
    this.clients.push(client);
    return client;
  }

  async update(newClient: Client): Promise<Client> {
    let client = this.clients.find((old) => old.id === newClient.id);
    client = newClient;
    return client;
  }

  async delete(id: string): Promise<boolean> {
    this.clients = this.clients.filter((client) => client.id !== id);
    return true;
  }

  async findProductsByClientId(clientId: string): Promise<Product[]> {
    return this.clients.find((client) => client.id === clientId).products;
  }

  async findProductsByClientName(clientName: string): Promise<Product[]> {
    return this.clients.find((client) => client.name === clientName).products;
  }

  async findProductByClientIdAndProductId(
    clientId: string,
    productId: string,
  ): Promise<Product> {
    const client = this.clients.find((client) => client.id === clientId);
    const product = client.products.find((product) => product.id === productId);
    return product;
  }

  async findProductByClientNameAndProductId(
    clientName: string,
    productId: string,
  ): Promise<Product> {
    const client = this.clients.find((client) => client.name === clientName);
    const product = client.products.find((product) => product.id === productId);
    return product;
  }

  async createProduct(product: Product): Promise<Product> {
    this.clients
      .find((client) => client.id == product.clientId)
      .products.push(product);

    return product;
  }

  async updateProductByClientId(
    clientId: string,
    product: Product,
  ): Promise<Product> {
    const client = this.clients.find((old) => old.id === clientId);
    client.products.push(product);
    return product;
  }

  async updateProductByClientName(
    clientName: string,
    product: Product,
  ): Promise<Product> {
    const client = this.clients.find((old) => old.name === clientName);
    client.products.push(product);
    return product;
  }

  async deleteProductByClientName(
    clientName: string,
    productId: string,
  ): Promise<boolean> {
    return true;
  }
}
