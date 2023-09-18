import { apolloConfig, typeormConfig } from '@/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeormConfig),
    ConfigModule.forRoot(),
    GraphQLModule.forRoot(apolloConfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
