import { GqlAuthGuard } from './../auth/guards/gql-auth.guard';
import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './inputs/create-user.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { UserDto } from './dto/user.dto';
import { CurrentUserGql } from '../auth/decorators/current-user-gql.decorator';

@Resolver(() => UserDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserDto)
  async createUser(@Args('data') data: CreateUserInput): Promise<UserDto> {
    return await this.usersService.create({ ...data });
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [UserDto])
  async users(): Promise<UserDto[]> {
    return await this.usersService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UserDto)
  async user(@Args('userId', ParseUUIDPipe) userId: string): Promise<UserDto> {
    return await this.usersService.findOne(userId);
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Args('userId', ParseUUIDPipe) userId: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<Boolean> {
    return await this.usersService.update(userId, {
      ...data,
    });
  }

  @Mutation(() => Boolean)
  async removeUser(
    @Args('userId', ParseUUIDPipe) userId: string,
  ): Promise<Boolean> {
    return await this.usersService.remove(userId);
  }
}
