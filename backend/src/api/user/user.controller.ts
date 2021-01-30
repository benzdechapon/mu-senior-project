import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  HttpException,
} from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { IController } from '../../shared/interface/controller';
import { CreateUserDto } from './user.dto';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController implements IController<IUser> {
  constructor(private service: UserService) {}

  getByQuery(query: IQuery): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }

  @Post()
  async create(@Body() data: CreateUserDto): Promise<IUser> {
    try {
      const result = await this.service.create(data);

      return result;
    } catch (e) {
      console.log('e', e);
      return e;
    }
  }

  @Patch('/:id')
  async updateById(
    @Param('id') id: string,
    @Body() data: IUser,
  ): Promise<IUser> {
    try {
      const result = await this.service.update(Number(id), data);
      return result;
    } catch (e) {
      throw new HttpException('Internal server error', 500);
    }
  }
  deleteById(id: string): Promise<string | IUser> {
    throw new Error('Method not implemented.');
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<IUser> {
    const result: IUser = await this.service.getById(Number(id));

    return result;
  }
}
