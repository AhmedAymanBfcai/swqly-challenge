import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account } from './account.entity';
import { TransferService } from './transfer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountService, TransferService],
  controllers: [AccountController],
})
export class AccountModule {}
