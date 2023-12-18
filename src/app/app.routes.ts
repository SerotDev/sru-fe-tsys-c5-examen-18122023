import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './serie/serie.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "peliculas",
        component: PeliculasComponent
    },
    {
        path: 'pelicula/:id',
        component: PeliculaComponent
    },
    {
        path: "series",
        component: SeriesComponent
    },
    {
        path: 'serie/:id',
        component: SerieComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent // Ruta para páginas no encontradas
    }
];
