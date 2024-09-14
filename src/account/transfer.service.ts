import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectDataSource() // Using the decorator for DataSource injection to handle transactions
    private dataSource: DataSource,
  ) {}

  async transfer(fromId: number, toId: number, amount: number): Promise<void> {
    await this.dataSource.transaction(async manager => {
      const fromAccount = await manager.findOne(Account, { where: { id: fromId.toString() } });
      const toAccount = await manager.findOne(Account, { where: { id: toId.toString() } });

      if (!fromAccount || !toAccount) {
        throw new BadRequestException('Invalid account IDs');
      }

      if (fromAccount.balance < amount) {
        throw new BadRequestException('Insufficient funds');
      }

      fromAccount.balance -= amount;
      toAccount.balance += amount;

      await manager.save([fromAccount, toAccount]);
    });
  }
}
