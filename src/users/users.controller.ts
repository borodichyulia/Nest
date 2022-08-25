import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  private readonly logger = new Logger(UsersController.name);
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    this.logger.debug('User create');
    return this.usersService.create(CreateUserDto);
  }
}
