import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
selectedProduct={
  id:null,
  name:null,
  price:null,
  description:null,
  image:null
}
  constructor(private firebaseservice :FirebaseService) { }

  ngOnInit() {
    this.firebaseservice.getData();
  }
  selectProduct(product){
this.selectedProduct=product;
  }
  updateProducts(productsForm:NgForm)
  {
    this.firebaseservice.updateData(productsForm.value).subscribe(resData =>{
      console.log(resData);
      this.firebaseservice.getData();
    },err =>{
      console.log(err);
    
    });
  }
  deleteProduct(product){
    this.firebaseservice.deleteData(product).subscribe(resData =>{
      console.log(resData);
      this.firebaseservice.getData();
    },err=>{
console.log(err);
    
    })
  }
}
