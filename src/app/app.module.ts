import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ProjectComponent } from './project/project.component';
// import { ServiceComponent } from './service/service.component';
// import { ContactComponent } from './contact/contact.component';

// const routes: Routes = [
//   {
//     path: '' ,
//     component: HomeComponent
//   },
//   {
//     path: 'About' ,
//     component: AboutComponent
//   },
//   {
//     path: 'project' ,
//     component: ProjectComponent
//   },
//   {
//     path: 'Service' ,
//     component: ServiceComponent
//   },
//   {
//     path: 'Contact' ,
//     component: ContactComponent
//   }
// ];

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'shipping', component: ShippingComponent },

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
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
