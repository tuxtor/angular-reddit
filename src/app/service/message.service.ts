import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Phrase } from '../phrases/phrase';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

    sendMessage(message: any) {
        this.subject.next(message);
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
