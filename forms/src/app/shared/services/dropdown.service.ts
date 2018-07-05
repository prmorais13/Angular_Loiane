import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  constructor(private http: Http) { }

  getEstadosBr() {
    return this.http.get('http://localhost:8080/procuradores')
          .map((res: Response) => res.json());
  }
}
