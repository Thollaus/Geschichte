import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPage } from '../edit/edit.page';
import { Topic } from 'src/Models/topic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


topics = [
  new Topic("Augsburger ...","Dieser kam zu", ),
  new Topic("Kalter Krieg", "sssss", ),
  new Topic("Kalter Krieg", "gggg",),
  new Topic("Zweiter Weltkrieg", "Es kämpften die Allierten gegen die Wehrmacht")
 
];



  constructor(private modalCtrl: ModalController) {}

  ionViewWillEnter () {
console.log(this.topics);

let to = new Topic("Augsburger ...","Fried")


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

    const { data } = await modal.onWillDismiss()

    if (data) {
      console.log(data);
      this.topics[pos].title = data.title
    }
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
