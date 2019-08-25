import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media.component';

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
    children: [
      {
        path: 'media',
        children: [
          {
            path: '',
            redirectTo: '/media/news',
            pathMatch: 'full'
          },
          {
            path: 'news',
            loadChildren: './news/news.module#NewsModule'
          },
          {
            path: 'favorites',
            loadChildren: './favorites/favorites.module#FavoritesModule'
          },
          {
            path: 'news/list',
            children: [
              {
                path: '',
                redirectTo: '/media/news',
                pathMatch: 'full'
              },
              {
                path: ':id',
                children: [
                  {
                    path: '',
                    loadChildren: './list/list.module#ListModule'
                  }
                ]
              }
            ]
          },
          {
            path: 'search/list',
            children: [
              {
                path: '',
                redirectTo: '/media/news',
                pathMatch: 'full'
              },
              {
                path: ':id',
                children: [
                  {
                    path: '',
                    loadChildren: './list/list.module#ListModule'
                  }
                ]
              }
            ]
          },
          {
            path: 'search/playlist',
            children: [
              {
                path: '',
                loadChildren: './playlist/playlist.module#PlaylistModule'
              },
              {
                path: ':id',
                children: [
                  {
                    path: '',
                    loadChildren: './playlist/playlist.module#PlaylistModule'
                  }
                ]
              }
            ]
          },
          {
            path: 'favorites/playlist',
            children: [
              {
                path: '',
                loadChildren: './playlist/playlist.module#PlaylistModule'
              },
              {
                path: ':id',
                children: [
                  {
                    path: '',
                    loadChildren: './playlist/playlist.module#PlaylistModule'
                  }
                ]
              }
            ]
          },
          {
            path: 'news/album',
            children: [
              {
                path: '',
                loadChildren: './playlist/playlist.module#PlaylistModule'
              },
              {
                path: ':id',
                children: [
                  {
                    path: '',
                    loadChildren: './playlist/playlist.module#PlaylistModule'
                  }
                ]
              }
            ]
          },
          {
            path: 'search',
            loadChildren: './search/search.module#SearchModule'
          },

        ]
      },
      {
        path: '',
        redirectTo: '/media/news',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
