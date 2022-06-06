import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  fetchTeamMatches = (teamName: string, year: string) => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('year', year);
    let response = this.http.get('http://localhost:8080/team/' + teamName + '/matches', { params : queryParams});
    return response;
  }

}
