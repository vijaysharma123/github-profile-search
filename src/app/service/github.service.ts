import { Injectable } from '@angular/core';
import {Http,Headers,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
private username:string;

  constructor(private _http:Http) 
  {
    this.username="vijaysharma123";
    console.log("service is working");
   }
    getuser(){
    	var search = new URLSearchParams();
     search.set('sort_by','popularity.desc');
         return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+'6a477c606d4cafd723ab'+'&client_secret='+'a49da814a39c27c53a245f8b42b7b97cfa9a5272')
             .map(res => res.json());

     }
     getrepo(){
     
         return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+'6a477c606d4cafd723ab'+'&client_secret='+'a49da814a39c27c53a245f8b42b7b97cfa9a5272')
             .map(res => res.json());

     }
     updateuser(username:string)
     {
    this.username=username;
     }
}
