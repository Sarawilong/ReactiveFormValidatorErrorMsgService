import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationManagementComponent } from './pages/validation-management/validation-management.component';

const routes: Routes = [{
  path: '',
  component: ValidationManagementComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
