import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'About' ,
    component: AboutComponent
  },
  {
    path: 'project' ,
    component: ProjectComponent
  },
  {
    path: 'Service' ,
    component: ServiceComponent
  },
  {
    path: 'Contact' ,
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
