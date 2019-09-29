import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ map } from'rxjs/operators';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

products=[];
  firebaseApi='https://angular-http-9152c.firebaseio.com/'
  constructor(private http:HttpClient) { }
getData()
{
  return this.http.get(`${this.firebaseApi}products.json`).pipe(map(data=>{
    let newArray=[];
    for(let key in data){
      newArray.push({...data[key], id: key});
    }
    return newArray;
  })).subscribe(resData =>{
    this.products=resData;
  });
}
  postData(data) {
    return this.http.post(`${this.firebaseApi}products.json`,data);
  }
  updateData(data){
    return this.http.put(`${this.firebaseApi}products/${data.id}.json`,data)
  }
  deleteData(data)
  {
    return this.http.delete(`${this.firebaseApi}products/${data.id}.json`);
  }
}
