import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Phrase } from '../phrases/phrase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseApiService {

  constructor(private http: HttpClient) {
    console.log('booting api service');
  }
  baseUrl: string = 'http://oc.vorozco.com:4000/demo-ddd/rest/phrases/';

  getPhrases(phrase: string): Observable<HttpResponse<Phrase[]>> {
    const searchParams = {'phrase': phrase};
    return this.http.get<Phrase[]>(this.baseUrl, { observe: 'response', params: searchParams });
  }

  getPhraseById(phraseId: number): Observable<Phrase> {
    return this.http.get<Phrase>(this.baseUrl + phraseId);
  }

  createPhrase(phrase: Phrase): Observable<any> {
    return this.http.post<Phrase>(this.baseUrl, phrase);
  }

  updatePhrase(phrase: Phrase): Observable<Phrase> {
    return this.http.put<Phrase>(this.baseUrl + phrase.phraseId, phrase);
  }


  deletePhrase(phraseId: number): Observable<any> {
    return this.http.delete(this.baseUrl + phraseId);
  }

}
