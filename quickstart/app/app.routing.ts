import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { LoggerAppComponent } from './logger.component';
import { FormComponent } from './form.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second/:id',
    component: SecondComponent
  },
  {
    path: 'logger',
    component: LoggerAppComponent
  },
  {
    path: 'form',
    component: FormComponent
  }

];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [FirstComponent, SecondComponent, LoggerAppComponent, FormComponent];
