import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('name') movieName: string) {
    return `We are searching for a movie, ${movieName}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return `This will create a movie : ${JSON.stringify(movieData)} , ${
      movieData.director
    }`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will remove a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updataData) {
    //return `This will patch a movie with the id : ${movieId}`;
    return {
      updateMovie: movieId,
      ...updataData,
    };
  }
}
