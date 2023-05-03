import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { CreateRoomInput } from './inputs/create-room.input';
import { UpdateRoomInput } from './inputs/update-room.input';
import { RoomDto } from './dto/room.dto';

@Resolver(() => RoomDto)
export class RoomsResolver {
  constructor(private readonly roomsService: RoomsService) {}

  @Mutation(() => RoomDto)
  createRoom(@Args('data') data: CreateRoomInput) {
    return this.roomsService.create({ ...data });
  }

  @Query(() => [RoomDto])
  async rooms(): Promise<RoomDto[]> {
    return await this.roomsService.findAll();
  }

  @Query(() => RoomDto)
  async room(@Args('roomId', ParseUUIDPipe) roomId: string): Promise<RoomDto> {
    return await this.roomsService.findOne(roomId);
  }

  @Mutation(() => Boolean)
  async updateRoom(
    @Args('roomId', ParseUUIDPipe) roomId: string,
    @Args('data') data: UpdateRoomInput,
  ): Promise<boolean> {
    return await this.roomsService.update(roomId, { ...data });
  }

  @Mutation(() => Boolean)
  async removeRoom(
    @Args('roomId', ParseUUIDPipe) roomId: string,
  ): Promise<boolean> {
    return await this.roomsService.remove(roomId);
  }
}
