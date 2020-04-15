import { Component } from '@angular/core';
import {v4 as uuidv4} from "uuid"

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



  constructor() {}
ionViewWillEnter () {
let id = uuidv4();
console.log(this.topics)
}
showTopic(id) {
  const pos=this.topics.findIndex((t) =>{
    return t.id == id;
  });

  if (pos > 1) {
    const title = this.topics[pos].title;
    console.log("Titel: "+ title);
  }

}


}
