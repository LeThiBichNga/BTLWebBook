import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/lib/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authen:AuthenticationService, private router: Router,) { }

  ngOnInit(): void {
  }
  login(email,pass){
    this.authen.login(email,pass);
    this.router.navigateByUrl("/admin/thongke");
  }
}
