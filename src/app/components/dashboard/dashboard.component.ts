import { Component } from '@angular/core';
import { JwtService } from '../../service/jwt.service';
import { response } from 'express';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  message: string;
    constructor(
      private service: JwtService
    ) {}

    ngOnInit(){
      this.hello()
    }
    
    hello() {
      this.service.hello().subscribe(
        (response) => {
          console.log(response);
          this.message = response.message;
        }
      )
    }
  }