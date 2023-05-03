import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';
import { resolve } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

const config = new ConfigService();

export async function getTypeOrmConfig(): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    // url: config.get('DATABASE_URL'),
    host: config.get('PG_HOST'),
    port: config.get('PG_PORT'),
    username: config.get('PG_USER'),
    password: config.get('PG_PASSWORD'),
    database: config.get('PG_DATABASE'),
    entities: [
      resolve(__dirname, '..', 'modules', '**', 'entities', '*.entity.{ts,js}'),
    ],
    migrations: [resolve(__dirname, 'migrations', '*.{ts,js}')],
    migrationsTableName: 'MIGRATIONS',
    migrationsRun: false,
    synchronize: false,
    cli: {
      migrationsDir: './src/database/migrations',
    },
    // logging: true,
  };
}

/**
 * Async function to export typeorm database module
 */
export async function DatabaseModule(): Promise<DynamicModule> {
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
  });
  return TypeOrmModule.forRoot(await getTypeOrmConfig());
}
