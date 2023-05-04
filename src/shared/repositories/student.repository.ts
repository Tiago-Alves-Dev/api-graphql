import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { StudentEntity } from '../entities';

@Injectable()
export class StudentRepository extends BaseRepository<StudentEntity> {
  constructor(
    @InjectRepository(StudentEntity)
    repository: Repository<StudentEntity>,
  ) {
    super(repository);
  }
}
