import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { RepositoryModule } from './shared/repositories/repository.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database';
import { RoomsModule } from './modules/rooms/rooms.module';
import { StudentsModule } from './modules/students/students.module';
import { UsersModule } from './modules/-users/-users.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './module/users/users.module';
import { UsersModule } from './modules/users/users.module';
import { UsersModule } from './module/users/users.module';

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
    StudentsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
