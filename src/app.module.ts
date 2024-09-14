import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password', //process.env.DB_PASSWORD, 
      database: 'money_transfer_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AccountModule,
  ],
})
export class AppModule {}
