import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  private apiKey: string = '6687b3ba5af922bd54a96cd8e0c06076';
  private apiUrl: string = 'https://api.themoviedb.org/3/movie/';

  pelicula_id: any;
  pelicula: any;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pelicula_id = params.get('id');
      let url: string = `${this.apiUrl}${this.pelicula_id}?api_key=${this.apiKey}`;

      this.http.get(url).subscribe(
        (result: any) => {
          this.pelicula = result;
          console.log(result);
          this.loaded = true;
        },
        error => {
          console.log("error", error);
        }
      );
    });
  }
}