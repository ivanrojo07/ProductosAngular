import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';

@Component({
	selector: 'productos',
	templateUrl: '../views/productos.html',
	providers: [ProductoService]
})

export class ProductosComponent{
	public titulo: string;
	public productos: Array<Producto>;
	public confirmado;
	constructor(private _activatedRoute: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService) {
		this.titulo = 'Lista de Productos';
	}
	ngOnInit(){
		this.listarProductos();
	}
	listarProductos(){
		this._productoService.getProductos().subscribe(
			result=>{
				if (result.code == 200) {
					// code...
					console.log(result);
					this.productos = result.data;
				}
				else{
					alert('No se puede acceder al servidor');
				}
				
			},
			error=>{

			});
	}
	borrarConfirm(id){
		this.confirmado = id;
	}
	cancelarConfirm(){
		this.confirmado = null;
	}

	eliminar(id: number){
		this._productoService.deleteProducto(id).subscribe(
			result=>{
				if(result.code == 200){
					console.log(result);
					this.listarProductos();
				}
				else{
					alert('no se puede eliminar');
				}
			},
			error=>{
				console.log(<any>error);
			});

	}
}