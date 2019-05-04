import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log('!!!!!!!!!!', this.router);
  }

  onToggleDrawer() {
    this.headerService.toggle();
  }
}
