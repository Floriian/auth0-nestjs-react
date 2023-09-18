import { DATABASE_CONFIG } from "@/constants";
import { registerAs } from "@nestjs/config";
export const databaseConfig = registerAs<IDatabaseConfig>(DATABASE_CONFIG, () => ({
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRESS_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB
}))

export interface IDatabaseConfig {
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
}