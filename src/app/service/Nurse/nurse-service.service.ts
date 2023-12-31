import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../TokenStorage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NurseServiceService {

  private rootUrl: string = "http://localhost:9090/api/nurse"

  constructor(private http: HttpClient, public token: TokenStorageService) { }

  private getHeaders(): HttpHeaders {
    const token = this.token.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public save = (data: any) => {
    const headers = this.getHeaders();
    return this.http.post(`${this.rootUrl}`, data, { headers })
  }
  public get = () => {
    const headers = this.getHeaders();
    return this.http.get(`${this.rootUrl}`, { headers })
  }

  public getByID = (id: number) => {
    const headers = this.getHeaders();
    return this.http.get(`${this.rootUrl}/${id}`, { headers })
  }

  public updateRegisteredByEmpId(id: any, data: any) {
    const headers = this.getHeaders();
    return this.http.put(`${this.rootUrl}/registered/${id}`, data, { headers })
  }

  public UpdateSsnByEmpid(id: any, data: any) {
    const headers = this.getHeaders();
    return this.http.put(`${this.rootUrl}/ssn/${id}`, data, { headers })
  }
}
