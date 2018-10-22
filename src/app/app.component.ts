import {Component, OnInit} from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import * as $ from 'jquery';
import { Howl } from 'howler';

function setImageUrl(message) {
  AppComponent.imageUrl = message;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    console.log("on init çalıştı");
  }

  //private serverUrl = 'http://localhost:8320/chat-service/socket';

  //private serverUrl = 'http://localhost:8321/socket';

  private serverUrl = 'https://chatservicemicro.herokuapp.com/socket';

  title = 'Chat';
  description = 'Upload';

  static imageUrl ;

  public classReference = AppComponent;

  private stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const sound = new Howl({
      src: ['../assets/sounds/natification.mp3'],
      volume: 0.7
    });

    const ws = new SockJS(this.serverUrl);

    this.stompClient = Stomp.Stomp.over(ws);

    const that = this;

    this.stompClient.connect({"nickname": "bilal"}, function(frame) {
      that.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          console.log(message);
          var body = JSON.parse(message.body);

          console.log(body);

          setImageUrl(body.message);

          console.log(this.imageUrl);

          $('.chat').append('<div style="margin: 10px;"  class=\'message\'><span style="padding: 5px; color: white; background-color: blue; border-radius: 5px;">' + body.date + '->' + body.message + '</span></div>');
          sound.play();
          console.log(message);
          console.log(body.message);
          console.log(body.date);
          console.log(body.info);
        }
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message', {'from': 'Bilal KOCOGLU'}, message);
    $('#input').val('');
  }

  downloadImage(){
    console.log(AppComponent.imageUrl);
    window.open(AppComponent.imageUrl);
  }
}
