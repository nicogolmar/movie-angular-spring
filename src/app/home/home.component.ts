import { Component, OnInit } from '@angular/core';
import { HelloService } from '../_services/hello.service';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hello?: string;
  movies?: any[];
  message?: any;

  constructor(private helloService: HelloService, private moviesService: MoviesService) { }

  ngOnInit(): void {
    // test hello world controller
    this.helloService.helloWorld().subscribe(
      data => {
        this.hello = data;
      },
      err => {
        this.message = err;
      }
    );

    // test movie controller
    this.moviesService.findAll().subscribe(
      data => {
        this.movies = data;
      },
      err => {
        this.movies = [];
        this.message = err.message;
      }
    );


  }
}
