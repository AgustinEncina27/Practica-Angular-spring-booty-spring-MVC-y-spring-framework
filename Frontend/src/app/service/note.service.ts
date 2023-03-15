import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../models/notes';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  
  constructor(private httpClient: HttpClient) { }

  getNotes(): Observable<Notes[]>{
    return this.httpClient.get<Notes[]>('http://localhost:8080/api/note'+'/list').pipe(map(res=>res));
  }

  addNote(request: any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/api/note'+'/',request).pipe(map(res=>res));
  }

  updateNote(request: any): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/api/note'+'/',request).pipe(map(res=>res));
  }

  removedNotes(request: any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/api/note/delete`,request).pipe(map(res=>res));
  }

  

}
