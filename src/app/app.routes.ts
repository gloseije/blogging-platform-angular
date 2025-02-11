import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SingleComponent } from './single/single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticleListComponent
    },
    {
        path: 'about',
        component: AboutComponent
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
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'dashboard/create',
        component: CreateComponent
    },
    {
        path: 'dashboard/edit/:id',
        component: EditComponent
    },
];
