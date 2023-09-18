import { apolloConfig, typeormConfig } from '@/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeormConfig),
    ConfigModule.forRoot(),
    GraphQLModule.forRoot(apolloConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
