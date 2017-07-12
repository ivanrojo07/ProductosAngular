import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//componentes
import {HomeComponent} from './components/home.component';
import {ErrorComponent} from './components/error.component';
import {ProductosComponent} from './components/productos.component';
import {NuevoproductoComponent} from './components/nuevoproducto.component';
import {ProductoComponent} from './components/producto.component';
import {ProductoEditComponent} from './components/editarproducto.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductosComponent},
	{path: 'producto/:id', component: ProductoComponent},
	{path: 'nuevo', component: NuevoproductoComponent},
	{path: 'editar/:id', component: ProductoEditComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);