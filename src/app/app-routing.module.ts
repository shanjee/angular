import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindBookPageComponent } from './containers/FindBookPageComponent';



const routes: Routes = [
//   { path: '', redirectTo: '/findbook', pathMatch: 'full' },
  { path: 'findbook', component: FindBookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FindBookPageComponent
//                                   DepartmentDetailComponent, 
//                                   EmployeeListComponent,
//                                   PageNotFoundComponent,
//                                   DepartmentOverviewComponent,
//                                   DepartmentContactComponent
]