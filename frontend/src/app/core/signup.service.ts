import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(data: any) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(`${environment.createUser}`, data, { observe: 'response' }).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        console.log(err);
        // this.notiServ.showError(err.error.details);
        return throwError(err);

      })
    );
  }


}