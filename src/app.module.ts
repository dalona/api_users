import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Rlwl2023.',
    database: 'user_database',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
