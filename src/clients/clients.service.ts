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
  items: Item[];
}

export class Item {
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
      items: [
        {
          id: '1',
          name: 'Muçarela',
          description: 'Molho especial, muçarela e orégano.',
          type: 'Pizza',
          price: 45,
          quantity: -1,
          image:
            'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
          label: '1234',
          note: 'Uma pizza boa',
          code: '1',
          clientId: '1',
        },
        {
          id: '2',
          name: 'Portuguesa',
          description: 'Molho especial, muçarela e orégano.',
          type: 'Pizza',
          price: 51,
          quantity: -1,
          image:
            'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg?w=500&h=500&crop=1',
          label: '1234',
          note: 'Uma pizza boa',
          code: '1',
          clientId: '1',
        },
        {
          id: '3',
          name: 'Toscana',
          description:
            'Molho especial, muçarela, calabresa ralada, presunto, parmesão, ovo cozido e orégano.',
          type: 'Pizza',
          price: 48,
          quantity: -1,
          image:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b-2.jpg?fit=700,1024',
          label: '1234',
          note: 'Uma pizza boa',
          code: '1',
          clientId: '1',
        },
        {
          id: '4',
          name: 'Coca-Cola 1L',
          description: '1 litro.',
          type: '1L',
          price: 8,
          quantity: -1,
          image:
            'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
          label: '1234',
          note: 'Coke 1L',
          code: '1',
          clientId: '1',
        },
        {
          id: '5',
          name: 'Guaraná Antártica 1L',
          description: '1 litro.',
          type: '1L',
          price: 8,
          quantity: -1,
          image:
            'https://brasilmarketingmix.files.wordpress.com/2012/08/logo-guaranc3a1-antarctica1.jpg',
          label: '1234',
          note: 'Guarana 1L',
          code: '1',
          clientId: '1',
        },
        {
          id: '6',
          name: 'Pepsi 1L',
          description: '1 litro.',
          type: '1L',
          price: 8,
          quantity: -1,
          image:
            'https://brandemia.org/contenido/subidas/2011/03/pepsi-a-traves-de-la-historia.jpg',
          label: '1234',
          note: 'Pepsi 1L',
          code: '1',
          clientId: '1',
        },
        {
          id: '7',
          name: 'Guaraná Antártica 1,5L',
          description: '1,5 litro.',
          type: '1L',
          price: 9,
          quantity: -1,
          image:
            'https://brandemia.org/contenido/subidas/2011/03/pepsi-a-traves-de-la-historia.jpg',
          label: '1234',
          note: 'Guarana 1.5L',
          code: '1',
          clientId: '1',
        },
        {
          id: '8',
          name: 'Coca-Cola 2L',
          description: '2 litros.',
          type: '2L',
          price: 12,
          quantity: -1,
          image:
            'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
          label: '1234',
          note: 'Coca-Cola 2L',
          code: '1',
          clientId: '1',
        },
        {
          id: '9',
          name: 'Guaraná Antártica 2L',
          description: '2 litros.',
          type: '2L',
          price: 10,
          quantity: -1,
          image:
            'https://brasilmarketingmix.files.wordpress.com/2012/08/logo-guaranc3a1-antarctica1.jpg',
          label: '1234',
          note: 'Guarana 2L',
          code: '1',
          clientId: '1',
        },
        {
          id: '10',
          name: 'Sukita Laranja 2L',
          description: '2 litros.',
          type: '2L',
          price: 10,
          quantity: -1,
          image:
            'https://blogger.googleusercontent.com/img/a/AVvXsEifcyjVrNeIOgfTXHMgGYGaCaU31lgiSY0alKvqo0gVEVflltqHUHNrMvjZdHeNECXg8v8wR_5KiUmucLYMDv_LYHB606ULjXFw0NWVgX2Yb12Rv4LiVkOjeA8DRBcumCIUWvi0oPQjfQejjxYsOGPAW47HIxg0SKviIfQiZ2YPZkWdNEjvsA=w1200-h630-p-k-no-nu',
          label: '1234',
          note: 'Sukita 2L',
          code: '1',
          clientId: '1',
        },
        {
          id: '11',
          name: 'Guarana Antartica Zero 2L',
          description: '2 litros.',
          type: '2L',
          price: 10,
          quantity: -1,
          image:
            'https://brasilmarketingmix.files.wordpress.com/2012/08/logo-guaranc3a1-antarctica1.jpg',
          label: '1234',
          note: 'Sukita 2L',
          code: '1',
          clientId: '1',
        },
        {
          id: '12',
          name: 'Wine',
          description: 'Bordô Suave 750 militros.',
          type: 'Wine',
          price: 22.9,
          quantity: -1,
          image:
            'https://brasilmarketingmix.files.wordpress.com/2012/08/logo-guaranc3a1-antarctica1.jpg',
          label: '1234',
          note: 'Sukita 2L',
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
      items: [
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

  async findItemsByClientId(clientId: string): Promise<Item[]> {
    return this.clients.find((client) => client.id === clientId).items;
  }

  async findItemsByClientName(clientName: string): Promise<Item[]> {
    return this.clients.find((client) => client.name === clientName).items;
  }

  async findItemByClientIdAnditemId(
    clientId: string,
    itemId: string,
  ): Promise<Item> {
    const client = this.clients.find((client) => client.id === clientId);
    const item = client.items.find((item) => item.id === itemId);
    return item;
  }

  async finditemByClientNameAnditemId(
    clientName: string,
    itemId: string,
  ): Promise<Item> {
    const client = this.clients.find((client) => client.name === clientName);
    const item = client.items.find((item) => item.id === itemId);
    return item;
  }

  async createItem(item: Item): Promise<Item> {
    this.clients.find((client) => client.id == item.clientId).items.push(item);

    return item;
  }

  async updateItemByClientId(clientId: string, item: Item): Promise<Item> {
    const client = this.clients.find((old) => old.id === clientId);
    client.items.push(item);
    return item;
  }

  async updateItemByClientName(clientName: string, item: Item): Promise<Item> {
    const client = this.clients.find((old) => old.name === clientName);
    client.items.push(item);
    return item;
  }

  async deleteItemByClientName(
    clientName: string,
    itemId: string,
  ): Promise<boolean> {
    return true;
  }
}
