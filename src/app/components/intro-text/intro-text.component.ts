import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-text',
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.scss']
})
export class IntroTextComponent implements OnInit {

  title = 'OctoPuss Boxing Club';

  constructor() { }

  ngOnInit() {
  }

}
