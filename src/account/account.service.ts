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

  async seedAccountsFromFile(filePath: string): Promise<Account[]> {
    try {
      const data = fs.readFileSync('src/account/accounts.json', 'utf8');
      const accounts: Account[] = JSON.parse(data);
      await this.repo.save(accounts);
      return accounts;
    } catch (error) {
      console.error('Failed to seed accounts from the file', error);
      throw error;
    }
  }
  
}