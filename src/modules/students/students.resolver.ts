import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { CreateStudentInput } from './inputs/create-student.input';
import { UpdateStudentInput } from './inputs/update-student.input';
import { StudentDto } from './dto/student.dto';

@Resolver(() => StudentDto)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation(() => StudentDto)
  async createStudent(
    @Args('data') data: CreateStudentInput,
  ): Promise<StudentDto> {
    return await this.studentsService.create({ ...data });
  }

  @Query(() => [StudentDto])
  async students(): Promise<StudentDto[]> {
    return await this.studentsService.findAll();
  }

  @Query(() => StudentDto)
  async student(
    @Args('studentId', ParseUUIDPipe) studentId: string,
  ): Promise<StudentDto> {
    return await this.studentsService.findOne(studentId);
  }

  @Mutation(() => StudentDto)
  updateStudent(
    @Args('studentId', ParseUUIDPipe) studentId: string,
    @Args('data') data: UpdateStudentInput,
  ): Promise<Boolean> {
    return this.studentsService.update(studentId, { ...data });
  }

  @Mutation(() => StudentDto)
  removeStudent(
    @Args('studentId', ParseUUIDPipe) studentId: string,
  ): Promise<Boolean> {
    return this.studentsService.remove(studentId);
  }
}
