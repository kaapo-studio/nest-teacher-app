import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsToTeacher(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return `Get all students to Teacher with an id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ): StudentResponseDto {
    return `Update student with id of ${studentId} to teacher with id ${teacherId} with the next data ${JSON.stringify(
      body,
    )}`;
  }
}
