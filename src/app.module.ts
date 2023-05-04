import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { RepositoryModule } from './shared/repositories/repository.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database';
import { RoomsModule } from './modules/rooms/rooms.module';
import { StudentsModule } from './modules/students/students.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    RepositoryModule,
    AuthModule,
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
