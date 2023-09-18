import { typeormConfig } from '@/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeormConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
