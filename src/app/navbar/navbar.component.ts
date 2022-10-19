import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openCv(){
    window.open('https://uploads-ssl.webflow.com/633c3da703e6d6503388e889/634344b0e3265cad62496e4d_VICTORIA%20ONOGU%20(1).pdf', '_blank')
  }

}
