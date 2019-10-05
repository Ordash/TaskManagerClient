import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { TaskListCreatedComponent } from './components/task-list-created/task-list-created.component';

const routes: Routes = [
  { path: '', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'created', component: TaskListCreatedComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
