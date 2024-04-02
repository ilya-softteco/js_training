import { Injectable } from '@nestjs/common';

@Injectable()
export class TestHooksService {


  findAll() {
    return `This action returns all testHooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testHook`;
  }


  remove(id: number) {
    return `This action removes a #${id} testHook`;
  }
}
