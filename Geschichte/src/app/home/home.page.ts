import { Component } from '@angular/core';
import {v4 as uuidv4} from "uuid"
import { ModalController } from '@ionic/angular';
import { EditPage } from '../edit/edit.page';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


topics = [
  {id: uuidv4(), title: "Kalter Krieg", content: "sssss"},
  {id: uuidv4(), title: "Kalter Krieg", content: "gggg"}
]



  constructor(private modalCtrl: ModalController) {}

  ionViewWillEnter () {
let id = uuidv4();
console.log(this.topics)
}

async editTopic(id, item) {
  console.log(id)
  const pos=this.topics.findIndex((t) =>{
    return t.id == id;
  })
  if (pos > -1) {
    const modal = await this.modalCtrl.create({
      component: EditPage,
    componentProps: {
      title: this.topics[pos].title
    }})
    
    await modal.present();

  }
  // close sliding item
  item.close();


};



showTopic(id) {
  const pos=this.topics.findIndex((t) =>{
    return t.id == id;
  });

  if (pos > -1) {
    const title = this.topics[pos].title;
    console.log("Titel: "+ title);
  }

}


}
