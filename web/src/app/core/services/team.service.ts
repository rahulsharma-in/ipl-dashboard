import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  fetchMatches = (teamName : string) => {
    let response = this.http.get('http://localhost:8080/team/' + teamName);
    return response;
  }
}
