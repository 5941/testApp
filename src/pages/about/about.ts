import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from '../../models/task.model';
import { IdService } from '../../service/Id.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
  taskList:Task [] = [];

  constructor(public navCtrl: NavController,private idService:IdService) {
    this.idService.getNewId();
    console.log (this.taskList)
  }

}
