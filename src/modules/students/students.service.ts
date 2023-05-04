import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentRepository } from 'src/shared/repositories/student.repository';

@Injectable()
export class StudentsService {
  constructor(private repository: StudentRepository) {}

  async create(data: Partial<StudentDto>): Promise<StudentDto> {
    const student = await this.repository.create(data);
    return student;
  }

  async findAll(): Promise<StudentDto[]> {
    return await this.repository.findAll({
      relations: ['room'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(studentId: string): Promise<StudentDto> {
    const student = await this.repository.findOne({
      where: { studentId },
      relations: ['room'],
      order: { createdAt: 'DESC' },
    });

    if (!student) {
      throw new NotFoundException('STUDENT_NOT_FOUND');
    }

    return student;
  }

  async update(studentId: string, data: Partial<StudentDto>): Promise<Boolean> {
    const student = await this.repository.findOne({ where: { studentId } });

    if (!student) {
      throw new NotFoundException('STUDENT_NOT_FOUND');
    }

    await this.repository.update(
      { studentId },
      {
        updatedBy: studentId,
        ...data,
      },
    );

    return true;
  }

  async remove(studentId: string): Promise<Boolean> {
    const student = await this.repository.findOne({ where: { studentId } });

    if (!student) {
      throw new NotFoundException('STUDENT_NOT_FOUND');
    }

    await this.repository.softRemove({ ...student });

    return true;
  }
}
