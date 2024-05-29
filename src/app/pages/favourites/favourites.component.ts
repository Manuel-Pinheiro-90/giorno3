import { Component } from '@angular/core';
import { Iproduct } from '../../modules/iproduct';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  favouritesDue:Iproduct[]=[];

  constructor(private prodsvc:ProductService ){}


  ngOnInit(){
    this.favouritesDue =this.prodsvc.favourites;
             }





}
