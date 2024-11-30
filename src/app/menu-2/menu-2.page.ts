import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceCartPage } from '../service-cart/service-cart.page';
import { AlertController } from '@ionic/angular';
import { Menu1Page } from '../menu-1/menu-1.page';
import { DataapiService } from '../dataapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-2',
  templateUrl: './menu-2.page.html',
  styleUrls: ['./menu-2.page.scss'],
})
export class Menu2Page implements OnInit {

  show:any =[];

  constructor(private navCtrl: NavController, private servicecartpage: ServiceCartPage , private alertController: AlertController, private http:HttpClient,
    public dataapi:DataapiService,
  ) {
    this.showproduct();
  }

  ngOnInit() {
    this.showproduct();

  }

  showproduct(){
    this.dataapi.showproduct().subscribe({
      next: (res: any) => {
        console.log('Successfully');
        this.show = res;
      },
      error: (error: any) => {
        console.log('Error', error);
      }
    });
  }


  //ฟังก์ชันลบสินค้าออกจากตะกร้าสินค้า
  deleteproductcart(id:any){
    this.dataapi.deleteproduct(id).subscribe({
      next: (res: any) => {
        console.log('ลบข้อมูลสำเร็จ', res);
      },
      error: (error: any) => {
        console.log('ไม่สามารถลบข้อมูลได้', error);
      },
    });
    this.showproduct();
  }



  goToHome(){
    this.navCtrl.navigateBack('/menu-1')
  }

  goToLogin() {
    this.navCtrl.navigateForward('/menu-3')
  }
  goToWait() {
    this.navCtrl.navigateForward('/waitfood')
  }


}
