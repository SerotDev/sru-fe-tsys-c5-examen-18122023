import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
  
})
export class PeliculasComponent implements OnInit {
  private apiKey: string = '6687b3ba5af922bd54a96cd8e0c06076';
  private random_number: number = Math.trunc(Math.random()*500 +1);
  private apiUrl: string = `https://api.themoviedb.org/3/discover/movie?page=${this.random_number}`;


  public movies: any[] = [];
  public loaded: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Construir la URL con la clave de la API
    const url = `${this.apiUrl}&api_key=${this.apiKey}`;

    // Hacer la solicitud HTTP
    this.http.get(url).subscribe(
      (result: any) => {
        this.movies = result.results;
        this.loaded = true;
      },
      (error) => {
        console.error('Error al recuperar datos de la API de The Movie Database', error);
      }
    );
  }
}

