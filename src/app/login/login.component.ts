import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  login;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.login = {
      username: '',
      password: '',
    };
  }
  loginUser() {
    this.userService.loginUser(this.login).subscribe(
      res => {
        alert('Login Successful!')
        this.router.navigate([""])
      },
      error => console.log(error, 'error')
    )
  }
}
