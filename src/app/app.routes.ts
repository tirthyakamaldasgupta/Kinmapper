import { Routes } from '@angular/router';
import { KinmapComponent } from './pages/kinmap/kinmap.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Kinmapper',
  },
  {
    path: 'kinmap',
    component: KinmapComponent,
    title: 'Kinmap',
  },
];
