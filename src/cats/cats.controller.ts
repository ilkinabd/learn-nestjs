import { Controller, Get, Res, Query, Post, Body, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { FindAllCatsDto } from './dto/fins-all-cats.dto';
import { CatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAllCats(@Query() query): FindAllCatsDto {
    let findAllCatsDto = new FindAllCatsDto();
    let catDto = new CatDto();
    catDto.name = 'pussy';
    catDto.age = 2;
    findAllCatsDto.message = 'All cats';
    findAllCatsDto.cats = [];
    findAllCatsDto.cats.push(catDto);
    return findAllCatsDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response): void {
    res.json({
      message: 'Cat has found',
      cats: [
        {
          id: parseInt(id),
          name: 'pussy',
          age: 2,
        },
      ],
    });
  }

  @Post()
  create(@Body() { name, age }: CreateCatDto, @Res() res: Response): void {
    res.json({
      message: 'Cat has been created',
      name: name,
      age: age,
    });
  }
}
