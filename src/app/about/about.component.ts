import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "My name is Alwin ";
  paragraph: string = "This is my profile, I am an engineering student";

  ngOnInit() {}

}
