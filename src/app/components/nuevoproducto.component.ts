import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';
import {GLOBAL} from '../services/global';
@Component({
	selector: 'nuevoproducto',
	templateUrl: '../views/nuevoproducto.html',
	providers: [ProductoService]
})

export class NuevoproductoComponent {
	public titulo: string;
	public producto: Producto;
	public filesToUpload;
	public resultUpload;
	constructor(private _productoService:ProductoService,
		private _route: ActivatedRoute,
		private _router: Router) {
		this.titulo = "Nuevo Producto";
		this.producto = new Producto('','',0,'');
	}
	onSubmit(){
		console.log(this.producto);
		if (this.filesToUpload) {
			// code...
			this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then(
			result=>{
				console.log(result);
				this.resultUpload = result;
				this.producto.imagen = this.resultUpload.filename;
				this.saveProduct();
			},
			error=>{
				console.log(error);
			});
		}else{
			this.saveProduct();
		}

		


		
	}
	saveProduct(){
		this._productoService.addProducto(this.producto).subscribe(
			result=>{
				if (result.code == 200) {
					// code...
					this._router.navigate(['/productos']);
					console.log(result);
				}else{
					console.log(result);
				}

			},
			error=>{
				console.log(<any>error);
				this._router.navigate(['/productos']);
		});
	}
	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}
}
