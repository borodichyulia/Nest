import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name?: string;

  @IsString()
  surname?: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
