import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StackService {

  private apiUrl = `${environment.API_URL}`;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options;

  constructor(private http: Http) { }

  public getAllOrgs() {
    return this.http.get(`${this.apiUrl}/api/orgs`, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  //get all organizations subscribed by the user
  public getAllOrgsByUser(userId) {
    return this.http.get(`${this.apiUrl}/api/stack/subscribed/${userId}`, this.options)
      .map((res: Response) => res.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'Server error'));
  }

}
