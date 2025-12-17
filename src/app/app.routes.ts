import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { Hero } from './hero/hero';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'register',component:Register},    
    {path:'login',component:Login},
    {path:'hero',component:Hero},
   /* {path:'contact',component:Contact},
    {path:'menu',component:Menu},
    {path:'cart',component:Cart},
    {path:'faq',component:Faq},
    {path:'product',component:Faq},
    {path:'**',component:NotFound}*/
];

