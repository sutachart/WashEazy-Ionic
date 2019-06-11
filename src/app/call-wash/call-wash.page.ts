import { Component, OnInit, Input  } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-call-wash',
  templateUrl: './call-wash.page.html',
  styleUrls: ['./call-wash.page.scss'],
})
export class CallWashPage {
  location_name = "บ้าน";
  addess = "888/37 ต. ในเมือง อ.เมือง จ.ขอนแก่น";
  acceptant_name = "วิทยา";
  tel = "0954795579";
  location_detail = "ซอยหลังมอ ทางเข้าร้านจ๊ะโอ๋น";
  place;
  i: any = 0;

  choice = [{
    choice_id: 1,
    choice_name: 'ซักผ้า',
    choice_price: 50
  }, {
    choice_id: 2,
    choice_name: 'อบผ้า',
    choice_price: 50
  }, {
    choice_id: 3,
    choice_name: 'รีดผ้า',
    choice_price: 50
  }]

  constructor(public modalController: ModalController) {
   }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: { 
        location_name: this.location_name,
        addess: this.addess,
        acceptant_name: this.acceptant_name,
        tel: this.tel,
        location_detail: this.location_detail
      }
    });
    await modal.present();
  }

  calculateService(CValue) {
    for (this.i = 0; this.i < 3; this.i++)
      if (CValue[this.i] == null)
        CValue[this.i] = '0';
      else
        CValue[this.i] = '1';

    this.place = CValue.length * 50;
    console.log(CValue);
    console.log("Services :", CValue[0] + CValue[1] + CValue[2]);

    console.log("Price :", this.place);
  }

}
