import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get('all')
    async getAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }
    @Get(':id')
    get(@Param() params) {
        return this.usersService.getUser(params.id);
    }
    @Delete('delete/:id')
    @HttpCode(200)
    async deleteEmployee(@Param('id') id) {
        return await this.usersService.delete(id);
    }
    @Post('add')
    @HttpCode(201)
    async createEmployee(@Body() newUsers: any) {
        return await this.usersService.create(newUsers);
    }
    @Put('update')
    @HttpCode(200)
    async updateEmployee(@Body() userUpdate: any) {
        return await this.usersService.update(userUpdate);
    }
}
