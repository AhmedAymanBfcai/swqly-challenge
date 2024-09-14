import { Controller, Post, Body, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { TransferService } from './transfer.service';

@Controller('accounts')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly transferService: TransferService,
  ) {}

  @Get()
  async getAllAccounts() {
    return this.accountService.find();
  }

  @Post('transfer')
  async transfer(@Body() transferDto: { fromId: number; toId: number; amount: number }) {
    return this.transferService.transfer(transferDto.fromId, transferDto.toId, transferDto.amount);
  }

  @Post('seed')
  async seedAccounts() {
    const accounts = await this.accountService.seedAccountsFromFile('account.json');
    return { message: 'Accounts seeded successfully', accounts};
  }
}
