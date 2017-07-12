import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';

@Component({
	selector: 'producto',
	templateUrl: '../views/producto.html',
	providers: [ProductoService]
})

export class ProductoComponent {
	public titulo: string;
	public producto: Producto;
	constructor(private _activatedRoute: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService) {
		this.titulo ="Producto: ";
		this.producto = new Producto('', '', null, '');
	}
	ngOnInit(){
		this._activatedRoute.params.forEach(
			(params: Params)=>{
				let id = params['id'];
				this._productoService.getProducto(id).subscribe(
					result=>{
						if(result.code == 200){
							this.producto = result.data;
						}
						else{
							this._router.navigate(['productos']);
						}
					},
					error=>{
						console.log(error);
					});

		});
	}
}