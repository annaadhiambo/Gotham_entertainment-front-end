import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.register = {
      username: '',
      email: '',
      password: '',
    };
  }
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
      res => {
        console.log(res)
        alert('User ' + this.register.username + ' was created successfully')
        this.router.navigate(['/'])
      },
      error => {
        return console.log(error, 'error');
      }
    )
  }
}
