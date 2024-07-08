import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(){}

  data: String = "Welcome to Login page...!";
  secondData = 'Enter Username';
  uname:any=""
  psw:any=""

  ngOnInit(): void {
  }


  login() {
    alert("login clicked");
  }

  accessUname(event:any){
    this.uname=event.target.value
    console.log(this.uname);
  }

  accessPsw(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }


}
