import { Routes } from '@angular/router';
import { DescripcionComponent } from './components/descripcion/descripcion.component';

export const routes: Routes = [
  { 
    path: 'descripcion/:id', 
    component: DescripcionComponent 
  }
];
