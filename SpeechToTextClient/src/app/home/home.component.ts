import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private title = 'Speech to Text Comparator';
  private wavBase64String = '';
  private completed = false;

  handleAudioChange(wavBase64String: string) {
    this.wavBase64String = wavBase64String;
  }

  handleCompletion(completed: boolean) {
    this.completed = completed;
  }
}
