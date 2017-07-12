import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';
import {GLOBAL} from '../services/global';

@Component({
	selector: 'editar-producto',
	templateUrl: '../views/nuevoproducto.html',
	providers: [ProductoService]

})

export class ProductoEditComponent{
	public titulo: string;
	public producto: Producto;
	public filesToUpload;
	public resultUpload;
	public id: number
	constructor(private _productoService: ProductoService,
		private _activatedRoute: ActivatedRoute,
		private _router: Router) {
		this.titulo ="Editar producto";
		this.producto = new Producto('', '', 0, '');

	}
	ngOnInit(){
		this._activatedRoute.params.forEach(
			(params: Params)=>{
				this.id = params['id'];
				this._productoService.getProducto(this.id).subscribe(
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
		console.log(this.id);
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
				this.editar();
			},
			error=>{
				console.log(error);
			});
		}else{
			this.editar();
		}

		


		
	}
	editar(){
		this._productoService.editProducto(this.id,this.producto).subscribe(
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