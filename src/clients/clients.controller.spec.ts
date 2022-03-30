import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
describe('ClientsController', () => {
  let clientsController: ClientsController;
  let clientsService: ClientsService;

  beforeEach(() => {
    clientsService = new ClientsService();
    clientsController = new ClientsController(clientsService);
  });

  it('should be defined', () => {
    expect(true).toBeTruthy();
  });
});

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
