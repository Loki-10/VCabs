import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable()

export class ConfirmService {


  public editDataDetails: any = [];

  public subject = new Subject<any>();

  private messageSource = new  BehaviorSubject(this.editDataDetails);

  currentMessage = this.messageSource.asObservable();

  changeMessage(sendUserRides: Object) {

    this.messageSource.next(sendUserRides)

  }
}


