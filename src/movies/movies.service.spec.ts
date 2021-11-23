import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({ title: 'test movie', year: 1999, genres: ['test'] });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      // expect(movie.id).toEqual(1);
    });
    it('should throw NotFoundException', () => {
      try {
        service.getOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual('Movie with ID : 1 not found');
      }
    });
  });

  describe('deleteOne', () => {
    it('should delete a movie', () => {
      service.create({ title: 'test movie', year: 1999, genres: ['test'] });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should throw NotFoundException', () => {
      try {
        service.deleteOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({ title: 'test movie', year: 1999, genres: ['test'] });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
    it('should increase id', () => {
      service.create({ title: 'test movie', year: 1999, genres: ['test'] });
      const checkMovieForId = service.getAll()[0];
      expect(checkMovieForId.id).toEqual(1);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({ title: 'test movie', year: 1999, genres: ['test'] });
      service.update(1, { title: 'updated movie' });
      const afterUpdate = service.getOne(1).title;
      expect(afterUpdate).toEqual('updated movie');
    });
    it('should throw NotFoundException', () => {
      try {
        service.update(1, { year: 1998 });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
