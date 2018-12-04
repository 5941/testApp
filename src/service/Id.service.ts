import { Injectable } from '@angular/core';

@Injectable()
export class IdService {
  idStart:number;
  constructor() { 
    this.idStart=0;
  }
  getNewId(){
    this.idStart++;
    return this.idStart;
  }
}