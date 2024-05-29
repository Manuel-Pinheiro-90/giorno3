import { Iproduct } from './../../modules/iproduct';
import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

import { Ijeson } from '../../modules/ijeson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
jsonContent!:Ijeson; //attesa dei dati di Ijeson
productArr:Iproduct[]=[];

cart2:Iproduct[]=[];
constructor(private prodsvc:ProductService ){}


ngOnInit(){
  this.prodsvc.getAll().subscribe(product =>{this.jsonContent= product
    this.productArr=this.jsonContent.products;  //attesa dei dati di Iproduct dopo averli tirati fuori da Ijeson

    this.cart2=this.prodsvc.cart



  } )
}

FavorOnclick(product:Iproduct):void{
this.prodsvc.addToFavourites(product)
console.log(product)
}
cartClick(product:Iproduct):void{
  this.prodsvc.addTocart(product)
  console.log(product)



}




}




