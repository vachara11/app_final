import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor( public http:HttpClient ) { }

  data_detailCart: any=[];


  //บันทึกสินค้าลงตะกร้า
  addMenu_Table(data:any){
    console.log("ข้อมูลส่งไปยัง api",data);
    return this.http.post('http://localhost/apipj/insertMenu.php',data);
  }

  //แสดงรายการสินค้าจากตาราง productdata
  showproductdata(){
    return this.http.get('http://localhost/apipj/showproductdata.php');
  }

  //แสดงรายการสินค้าในตะกร้า
  showproduct(){
    return this.http.get('http://localhost/apipj/showcart.php');
  }

  //ลบสินค้าในตะกร้า
  deleteproduct(id:any){
    return this.http.get('http://localhost/apipj/deleteshowcart.php?id='+id);
  }

}
