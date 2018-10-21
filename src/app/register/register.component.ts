import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {RegisterDTO} from '../dto/RegisterDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerDto: RegisterDTO;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  deneme() {
    this.httpService.deneme().subscribe(
      message => {
        console.log(message);
      },
      error2 => {
        console.log(error2);
      }
    );
  }

  register() {
    this.registerDto = new RegisterDTO();
    this.registerDto.firstName = 'bilal';
    this.registerDto.surName = 'surname';
    this.registerDto.email = 'deneme';
    this.registerDto.password = 'asdf';
    console.log(this.registerDto);
    this.httpService.register(this.registerDto).subscribe(
      response => {
        console.log(response.status);
        console.log(response.body.message);
      },
      error2 => {
        console.log(error2.status);
        console.log(error2.error.message);
      }
    );
  }
}
