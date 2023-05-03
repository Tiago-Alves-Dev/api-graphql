import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { RoomsModule } from './modules/rooms/rooms.module';
import { RepositoryModule } from './modules/shared/repositories/repository.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database';

@Module({
  imports: [
    RepositoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),

    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
