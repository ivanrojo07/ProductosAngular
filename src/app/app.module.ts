import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import { routing, appRoutingProviders } from './app.routing';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosComponent } from './components/productos.component';
import {NuevoproductoComponent} from './components/nuevoproducto.component';
import {ProductoComponent} from './components/producto.component';
import {ProductoEditComponent} from './components/editarproducto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosComponent,
    NuevoproductoComponent,
    ProductoComponent,
    ProductoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
