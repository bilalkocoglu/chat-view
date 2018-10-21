import { Component, OnInit } from '@angular/core';
import { PasswordChangeDTO } from '../dto/PasswordChangeDTO';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  private passwordChangeDTO: PasswordChangeDTO;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  mailSend() {
    this.passwordChangeDTO = new PasswordChangeDTO();
    this.passwordChangeDTO.destinationMail = ['bilal.kocoglu@outlook.com.tr'] ;
    this.passwordChangeDTO.newPassword = 'ASDJFHJK';
    this.passwordChangeDTO.nameAndSurname = 'Bilal Koçoğlu';
    console.log(this.passwordChangeDTO);

    this.httpService.changePassword(this.passwordChangeDTO).subscribe(
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
