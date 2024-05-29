import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { Iproduct } from '../../modules/iproduct';
import { Ijeson } from '../../modules/ijeson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
jsonContent!:Ijeson; //attesa dei dati di Ijeson
productArr:Iproduct[]=[];

constructor(private prodsvc:ProductService ){}


ngOnInit(){
  this.prodsvc.getAll().subscribe(product =>{this.jsonContent= product
    this.productArr=this.jsonContent.products;  //attesa dei dati di Iproduct dopo averli tirati fuori da Ijeson

  } )

}





}




