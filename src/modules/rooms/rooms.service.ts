import { Injectable, NotFoundException } from '@nestjs/common';
import { RoomRepository } from 'src/shared/repositories';
import { RoomDto } from './dto/room.dto';

@Injectable()
export class RoomsService {
  constructor(private repository: RoomRepository) {}

  async create(data: Partial<RoomDto>): Promise<RoomDto> {
    const room = await this.repository.create(data);
    return room;
  }

  async findAll(): Promise<RoomDto[]> {
    return await this.repository.findAll({
      relations: ['students'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(roomId: string): Promise<RoomDto> {
    const room = await this.repository.findOne({
      where: { roomId },
      relations: ['students'],
      order: { createdAt: 'DESC' },
    });

    if (!room) {
      throw new NotFoundException('ROOM_NOT_FOUND');
    }

    return room;
  }

  async update(roomId: string, data: Partial<RoomDto>): Promise<boolean> {
    const romm = await this.repository.findOne({ where: { roomId } });

    if (!romm) {
      throw new NotFoundException('ROOM_NOT_FOUND');
    }

    await this.repository.update(
      { roomId },
      {
        updatedBy: roomId,
        ...data,
      },
    );

    return true;
  }

  async remove(roomId: string): Promise<boolean> {
    const romm = await this.repository.findOne({ where: { roomId } });

    if (!romm) {
      throw new NotFoundException('ROOM_NOT_FOUND');
    }

    await this.repository.delete({ roomId });

    return true;
  }
}
