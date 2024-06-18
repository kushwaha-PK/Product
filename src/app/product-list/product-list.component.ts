import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { EventEmitter } from 'stream';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,CartComponent,FilterPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public productList : any ;
  searchKey:string ="";
  public filterCategory : any
  products: any[] = [
    {
      id: 1,
      title:'Dell Laptop',
      category: 'Electronic',
      description: 'Description of Product 1',
      imageUrl: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
      brand:'Dell',
      rating: 4.5,
      price: 50000
    },
    {
      id: 2,
      title:'Puma Shoes',
      category: 'Fashion',
      description: 'Description of Product 2',
      imageUrl: 'https://img0.junaroad.com/uiproducts/20246913/zoom_0-1693241250.jpg',
      brand:'Puma',
      rating: 3.8,
      price: 3000
    },
    {
      id: 2,
      title:'S20 EF',
      category: 'Electronic',
      description: 'Description of Product 2',
      imageUrl: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
      brand:'Samsung',
      rating: 4.8,
      price: 30000
    },
  ];
  filter(category: string) {
    this.filterCategory = category;
    debugger
    if (category === '') {
      this.products = this.products;
    } else {
      this.products = this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
  }
  AddProduct():void
  {

  }
}
