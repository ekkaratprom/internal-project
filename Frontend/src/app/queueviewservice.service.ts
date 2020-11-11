import { getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueviewserviceService {
  private _test: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public readonly test: Observable<boolean> = this._test.asObservable();

  constructor() {

  }
getTest(){
  return this._test;
}
settest(value:boolean){
 this._test.next(value);
}

}
