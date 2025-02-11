import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticleListComponent
    },
    {
        path: 'connexion',
        component: ConnexionComponent
    },
    {
        path: 'inscription',
        component: InscriptionComponent
    },
    {
        path: 'articles/:id',
        component: SingleComponent
    }
];
