import { ClientsService, ClientsData } from './clients.service';
describe('ClientsService', () => {
  let clientsService: ClientsService;
  let clientsData: ClientsData;

  beforeEach(() => {
    clientsData = new ClientsData([]);
    clientsService = new ClientsService(clientsData);
  });

  it('should be defined', async () => {
    clientsData.clients = [
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

    const client = await clientsService.findByName('PizzariaDoCarlos');

    expect(client.name == 'PizzariaDoCarlos');
  });
});
