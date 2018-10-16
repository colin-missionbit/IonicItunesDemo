import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: Observable<any>;

  constructor(public navCtrl: NavController,  public httpClient: HttpClient) {
   
  }

  getData(event){
    var query = event.target.value;
    console.log(query);
    this.data = this.httpClient.get("https://itunes.apple.com/search?term=" + query + "\&entity=musicVideo");
    this.data.subscribe(data => {
      console.log('my data: ', data.results);
    })
  }

}
