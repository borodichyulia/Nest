import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  private readonly logger = new Logger(UsersController.name);
  @Get()
  @UseGuards(JwtAuthGuard)
  getAllUsers(@Res({ passthrough: true }) response: Response) {
    response.cookie('key', 'value');
    return this.usersService.getAllUsers();
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    this.logger.debug('User create');
    return this.usersService.create(CreateUserDto);
  }
}
