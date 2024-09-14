import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async transfer(fromId: number, toId: number, amount: number): Promise<void> {
    const fromAccount = await this.accountRepository.findOneBy({ id: fromId });
    const toAccount = await this.accountRepository.findOneBy({id: toId });

    if (!fromAccount || !toAccount) {
      throw new BadRequestException('Invalid account IDs');
    }

    if (fromAccount.balance < amount) {
      throw new BadRequestException('Insufficient funds');
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;

    await this.accountRepository.save([fromAccount, toAccount]);
  }
}
