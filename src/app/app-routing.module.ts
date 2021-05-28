import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexPage } from './Pages/index/index.page';
import { HomePage } from './Pages/home/home.page';

const routes: Routes = [];
routes.push({path: "", component: AppComponent, });
routes.push({path: "app", component: IndexPage});
routes.push({path: "home", component: HomePage});
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
