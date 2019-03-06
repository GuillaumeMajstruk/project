import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AcceuilComponent } from '../app/acceuil/acceuil.component';

export const appRoutes: Routes = [
	{
		path: 'commun-acceuil',
		component: AcceuilComponent
	},
	{
		path: '',
		component: LoginComponent
	}
];