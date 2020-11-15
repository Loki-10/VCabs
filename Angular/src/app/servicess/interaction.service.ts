import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable()

export class InteractionService {


  public editDataDetails: any = [];

  public subject = new Subject<any>();

  private messageSource = new  BehaviorSubject(this.editDataDetails);

  currentMessage = this.messageSource.asObservable();

  changeMessage(userDetails: Object) {

    this.messageSource.next(userDetails)

  }
}


