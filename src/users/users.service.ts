import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
  find(userByid) {
    return this.userRepo.findOne(userByid.id);
  }
  async getUser(_id: number): Promise<User[]> {
    return await this.userRepo.find({
      where: [{ "id": _id }]
    });
  }
  delete(id) {
    this.userRepo.delete(id);
  }
  create(newUsers) {
    this.userRepo.insert(newUsers)
  }
  update(userUpdate) {
    this.userRepo.update(userUpdate.id, userUpdate);
  }
}
