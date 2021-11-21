import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  /* Query, */
} from '@nestjs/common';
import { Movie } from 'src/entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updataData) {
    return {
      updateMovie: movieId,
      ...updataData,
    };
  }

  /* @Get('search')
  search(@Query('name') movieName: string) {
    return `We are searching for a movie, ${movieName}`;
  } */
}
