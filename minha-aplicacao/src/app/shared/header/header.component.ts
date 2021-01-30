import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input("title") title:string = "";

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
  }

  logOut(){
    this.authService.clearSession();
    this.router.navigate(["login"]);
  }

}
