import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {
  private apiKey: string = '6687b3ba5af922bd54a96cd8e0c06076';
  private apiUrl: string = 'https://api.themoviedb.org/3/tv/';

  serie_id: any;
  serie: any;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serie_id = params.get('id');
      let url: string = `${this.apiUrl}${this.serie_id}?api_key=${this.apiKey}`;

      this.http.get(url).subscribe(
        (result: any) => {
          this.serie = result;
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
