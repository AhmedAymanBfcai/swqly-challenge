import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export class AccountService extends TypeOrmCrudService<Account> {
  constructor(@InjectRepository(Account) protected repo: Repository<Account>) {
    super(repo);
  }

  async seedAccountsFromFile(filePath: string): Promise<void> {
    const data = fs.readFileSync('F:\Development\challenges\swqly-challenge\src\account\accounts.json', 'utf8');
    const accounts: Account[] = JSON.parse(data);
    await this.repo.save(accounts);
  }
}
