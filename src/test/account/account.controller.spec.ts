import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from '../../account/account.controller'
import { AccountService } from '../../account/account.service';
import { TransferService } from 'src/account/transfer.service';
import { Account } from '../../account/account.entity';
import { BadRequestException } from '@nestjs/common';


describe('AccountController', () => {
  let controller: AccountController;
  let accountService: AccountService;
  let transferService: TransferService;
  let fromAccountId = "4c0b1e82-2df3-48a1-a297-094cddde5546";
  let toAccountId = "db6d4e22-ed9a-4bac-8b50-859d17e83591";
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        {
          provide: AccountService,
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            seedAccountsFromFile: jest.fn().mockResolvedValue([]),
          },
        },
        {
          provide: TransferService,
          useValue: {
            transfer: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AccountController>(AccountController);
    accountService = module.get<AccountService>(AccountService);
    transferService = module.get<TransferService>(TransferService);
  });

  describe('getAllAccounts', () => {
    it('should return all accounts', async () => {
    });
  });

  describe('transfer', () => {
    it('should transfer money between accounts', async () => {
    });
  });

  describe('seedAccounts', () => {
    it('should seed accounts from file', async () => {
    });
  });
});
