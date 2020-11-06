import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie;
  error;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovie()
  }

  loadMovie() {
    const movieId = + this.route.snapshot.paramMap.get('id')
    this.movieService.getMovieById(movieId).subscribe(
      (data) => {
        this.movie = data
      },
      error => this.error = error
    );
    console.log(movieId)
  }
}
