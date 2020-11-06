import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css'],
  providers: [MoviesService]
})
export class BodyPageComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MoviesService) { }


  ngOnInit(): void {
    this.getMovies()
  }
  getMovies() {
    this.movieService.getMoviesData(this.movies).subscribe(
      (res: any) => {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');

        console.log(res);
        this.movies = res;
      }
    )
  }



}
