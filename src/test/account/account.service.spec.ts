import { Test, TestingModule } from '@nestjs/testing';
import { TransferService } from '../../account/transfer.service'
import { getRepositoryToken } from '@nestjs/typeorm';
import { Account } from '../../account/account.entity';
import { Repository, DataSource, FindOneOptions } from 'typeorm';
import { BadRequestException } from '@nestjs/common';


describe('TransferService', () => {
  let service: TransferService;
  let repo: Repository<Account>;
  let dataSource: DataSource;
  let fromAccountId = "4c0b1e82-2df3-48a1-a297-094cddde5546";
  let toAccountId = "db6d4e22-ed9a-4bac-8b50-859d17e83591";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransferService,
        {
          provide: getRepositoryToken(Account),
          useClass: Repository,
        },
        {
          provide: DataSource,
          useValue: {
            transaction: jest.fn().mockImplementation((cb) => cb({
              findOne: jest.fn(),
              save: jest.fn(),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<TransferService>(TransferService);
    repo = module.get<Repository<Account>>(getRepositoryToken(Account));
    dataSource = module.get<DataSource>(DataSource);
  });

  describe('transfer', () => {
    it('should transfer money between accounts', async () => {
    });

    it('should throw error if from account has insufficient funds', async () => {
    });

    it('should throw error if either account is not found', async () => {
    });
  });
});
