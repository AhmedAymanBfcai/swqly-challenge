import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password', 
      database: 'money_transfer_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AccountModule,
  ],
})
export class AppModule {}
