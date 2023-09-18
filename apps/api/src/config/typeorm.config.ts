import {IDatabaseConfig, databaseConfig} from "@/config"
import { DATABASE_CONFIG } from "@/constants";
import { User } from "@/users/models/user.model";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule.forFeature(databaseConfig)],
    useFactory: async (configService: ConfigService) => {
        return {
            type: 'postgres',
            url: configService.get<IDatabaseConfig>(DATABASE_CONFIG).DATABASE_URL,
            entities: [User],
            synchronize: true,
        }
    },
    inject: [ConfigService],
}