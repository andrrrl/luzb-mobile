import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class LuzService {

    private luzURL = environment.API + '/luz/';

    constructor(private http: Http) { }

    extractData(res: Response) {
        return res.json();
    }

    get(opcion: String): Observable<any> {
        return this.http.get(this.luzURL + opcion).map(this.extractData);
    }

}
