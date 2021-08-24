import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsToTeacher() {
    return 'Get all students to Teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update student to teacher';
  }
}
