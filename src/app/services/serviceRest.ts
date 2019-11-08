import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable()
export class ProductoService{
    public url: string ='localhost:8080/';
    public data: any=null;
 
    constructor(
        private http: HttpClient
    ){
      
    }
 
   public getProductos():Observable<any>{
        // return this.http.get('https://randomuser.me/api/?results=25');

      this.http.get('http://localhost:8080/rest/servicioPersonas/personas').subscribe(dataApi => {   // data is already a JSON object
      console.log(dataApi);;
      this.data=dataApi;})

     return this.data;
}


    
    // addProducto("parametros"): Observable<any>{
        // let json = JSON.stringify(producto);
        // let params = "json="+json;
        // let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        // return this.http.post(this.url+'productos', params, {headers: headers});
    // }
 
 
}
