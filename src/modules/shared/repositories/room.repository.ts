import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { RoomEntity } from '../entities';

@Injectable()
export class RoomRepository extends BaseRepository<RoomEntity> {
  constructor(
    @InjectRepository(RoomEntity)
    repository: Repository<RoomEntity>,
  ) {
    super(repository);
  }
}
