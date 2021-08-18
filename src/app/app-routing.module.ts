import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"myNotes",component:MyNotesComponent},
  {path:"**",component:LoginComponent},
  {path:"",pathMatch:'full',redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
