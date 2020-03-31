import { Injectable } from '@nestjs/common';
import { CatDto } from './dto/cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[];
}
