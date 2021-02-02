import{Routes,RouterModule} from '@angular/router';
import { from } from 'rxjs';

import{PrinciComponent} from './components/princi/princi.component';
import {GastroComponent} from './components/gastro/gastro.component';
import { PrvinComponent} from './components/prvin/prvin.component'


const appRoutes:Routes=[
 {path:'',component:PrinciComponent },
 { path:'princi',component:PrinciComponent},
 {path:'gastro', component:GastroComponent},
 {path:'prvin',  component:PrvinComponent },
]
export const routing = RouterModule.forRoot(appRoutes)
