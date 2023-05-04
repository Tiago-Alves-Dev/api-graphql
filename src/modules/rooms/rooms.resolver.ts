import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { CreateRoomInput } from './inputs/create-room.input';
import { UpdateRoomInput } from './inputs/update-room.input';
import { RoomDto } from './dto/room.dto';
import { CurrentUserGql } from '../auth/decorators/current-user-gql.decorator';
import { UserDto } from '../users/dto/user.dto';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver(() => RoomDto)
export class RoomsResolver {
  constructor(private readonly roomsService: RoomsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RoomDto)
  async createRoom(
    @Args('data') data: CreateRoomInput,
    @CurrentUserGql() user: UserDto,
  ): Promise<RoomDto> {
    const userCurrent = user['userId'];
    return await this.roomsService.create({ ...data, createdBy: userCurrent });
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [RoomDto])
  async rooms(): Promise<RoomDto[]> {
    return await this.roomsService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => RoomDto)
  async room(@Args('roomId', ParseUUIDPipe) roomId: string): Promise<RoomDto> {
    return await this.roomsService.findOne(roomId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async updateRoom(
    @Args('roomId', ParseUUIDPipe) roomId: string,
    @Args('data') data: UpdateRoomInput,
    @CurrentUserGql() user: UserDto,
  ): Promise<boolean> {
    const userCurrent = user['userId'];
    return await this.roomsService.update(roomId, {
      ...data,
      updatedBy: userCurrent,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async removeRoom(
    @Args('roomId', ParseUUIDPipe) roomId: string,
  ): Promise<boolean> {
    return await this.roomsService.remove(roomId);
  }
}
