import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phrase } from './Phrase';

@Injectable({
  providedIn: 'root'
})
export class PhraseApiService {

  baseUrl: string = 'http://oc.vorozco.com:4000/demo-ddd/rest/phrases/';
  constructor(private http: HttpClient) { }
  //GET
  getPhrases(phrase: string): Observable<HttpResponse<Phrase[]>> {
    const searchParams = {'phrase': phrase};
    return this.http.get<Phrase[]>(this.baseUrl,
      {observe: 'response', params: searchParams});
  }
  //POST - create
  createPhrase(phrase: Phrase): Observable<any>{
    return this.http.post(this.baseUrl, phrase);
  }
  //PUT - update
  updatePhrase(phrase: Phrase): Observable<Phrase> {
    return this.http.put<Phrase>(this.baseUrl + phrase.phraseId, phrase);
  }

  //DELETE
  deletePhrase(phraseId: number): Observable<any> {
    return this.http.delete(this.baseUrl + phraseId);
  }
}
