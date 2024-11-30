import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceCartPage } from './../service-cart/service-cart.page';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-menu-1',
  templateUrl: './menu-1.page.html',
  styleUrls: ['./menu-1.page.scss'],
})
export class Menu1Page implements OnInit {

  //ประกาศตัวแปรรับค่าข้อมูลสำหรับการแสดงผลข้อมูล
  showproductdata:any = [];


  presentingElement : any;


  constructor(private navCtrl: NavController, private servicecartpage: ServiceCartPage, private actionSheetCtrl: ActionSheetController, public modalController: ModalController , private router: Router,
    public dataapi: DataapiService
  ) {
    this.showdataproduct();
  }

  //ฟังก์ชันเพิ่มสินค้าลงตะกร้าสินค้า
  addproduct(datapro:any) {
      this.dataapi.data_detailCart = datapro;
      let data = {
        name:datapro.name,
        price:datapro.price,
        detail:datapro.detail,
      }
      this.dataapi.addMenu_Table(data).subscribe({
        next: (res: any) => {
          console.log("ข้อมูลถูกเพิ่ม", res);
        },
        error: (error: any) => {
          console.log("ข้อมูลไม่ถูกเพิ่ม", error);
        }
      });
  }

  //แสดงรายการสินค้าจากตาราง productdata
  showdataproduct(){
    this.dataapi.showproductdata().subscribe({
      next: (res: any) => {
        console.log('Successfully');
        this.showproductdata = res;
      },
      error: (error: any) => {
        console.log('Error', error);
      }
    });

  }

  showdata(){
    this.router.navigate(['/menu-2']);
  }



  async confirmOrder() {
    // ที่นี่จะเป็นส่วนที่ทำการประมวลผลคำสั่งซื้อ เช่น ส่งข้อมูลไปยัง server
    // หลังจากประมวลผลเสร็จแล้ว ให้ปิด modal และกลับไปหน้าหลัก

    // ปิด modal
    await this.modalController.dismiss();

    // นำทางไปหน้าหลัก (สมมติว่า routerLink ของหน้าหลักคือ '/home')
    // คุณอาจต้องปรับ routerLink ให้ตรงกับโครงสร้างของแอปพลิเคชันของคุณ
    this.router.navigate(['/menu-1']);
  }

  async confirmCancle() {
    // ที่นี่จะเป็นส่วนที่ทำการประมวลผลคำสั่งซื้อ เช่น ส่งข้อมูลไปยัง server
    // หลังจากประมวลผลเสร็จแล้ว ให้ปิด modal และกลับไปหน้าหลัก

    // ปิด modal
    await this.modalController.dismiss();

    // นำทางไปหน้าหลัก (สมมติว่า routerLink ของหน้าหลักคือ '/home')
    // คุณอาจต้องปรับ routerLink ให้ตรงกับโครงสร้างของแอปพลิเคชันของคุณ
    this.router.navigate(['/menu-1']);
  }


  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page') ;
    this.showdataproduct();
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'กลับสู่หน้าหลักหรือไม่',
      buttons: [
        {
          text: 'ตกลง',
          role: 'confirm',
        },
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  goToContact(){
    this.navCtrl.navigateForward('/menu-2')
  }

  backToHome(){
    this.navCtrl.navigateBack('/home')
  }
  goToWait(){
    this.navCtrl.navigateForward('/waitfood')
  }

  goToWithrice(){
    this.navCtrl.navigateForward('/withrice')
  }

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
