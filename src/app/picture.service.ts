import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  constructor(private http: HttpClient) {}

  getPictures(): Observable<any> {
    return this.http.get<any[]>(environment.apiUrl);
  }
}
