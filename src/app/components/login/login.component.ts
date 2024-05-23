// import { Component, OnInit } from '@angular/core';
// import { JwtService } from '../../service/jwt.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
  
// export class LoginComponent implements OnInit {
//   loginForm :FormGroup| undefined;

//   constructor(
//     private service:JwtService,
//     private fb: FormBuilder,
//     private router:Router
//   ) { }
//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//         email : ['', Validators.required, Validators.email],
//         password : ['', Validators.required]
//     })
//   }
//   submitForm() {
//     this.service.login(this.loginForm.value).subscribe(
//       (response) => {
//         console.log(response);
//         if(response.jwtToken != null) { // response phải trả về đúng giá trị jwtToken của trường response backend
//           alert("Bạn đã đăng nhập thành công, mã token bạn là " + response.jwtToken);
//           const token = response.jwtToken;
//           localStorage.setItem('jwtToken', token);
//           this.router.navigateByUrl("/dashboard");
//       }
//     }
//     )
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { JwtService } from 'src/app/service/jwt.service';
import { JwtService } from '../../service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }
  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if(response.jwtToken != null) { // response phải trả về đúng giá trị jwtToken của trường response backend
          alert("Bạn đã đăng nhập thành công, mã token bạn là " + response.jwtToken);
          const token = response.jwtToken;
          localStorage.setItem('jwtToken', token);
          this.router.navigateByUrl("/dashboard");
      }
    }
    )
  }
 

}
