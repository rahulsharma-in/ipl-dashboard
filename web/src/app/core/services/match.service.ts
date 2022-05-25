import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  fetchMatches = (teamName : string) => {
    let response = this.http.get('http://localhost:8080/team/' + teamName);
    return response;
  }
}
