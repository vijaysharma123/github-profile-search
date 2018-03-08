import { Component } from '@angular/core';
import {GithubService} from './service/github.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubService]
  })
export class AppComponent {
  title = 'app';
  username:string;
  user:Array<object>;
  repo:Array<object>;

  constructor(private _githubservice:GithubService)
  {
  
  }
searchUser()
{
	this._githubservice.updateuser(this.username);
   this._githubservice.getuser().subscribe(user=>{
    	this.user=user;
    	console.log(this.user);
    });
    this._githubservice.getrepo().subscribe(repo=>
    {
    	this.repo=repo;
    }) 

};
   

}  

  

