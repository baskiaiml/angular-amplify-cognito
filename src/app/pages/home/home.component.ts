import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/services/home/home.service';
import { HttpStatusCode } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService,
              private spinner: NgxSpinnerService) { }

  message: string | undefined;

  ngOnInit() {

    this.spinner.show();

    this.fetchMessage()

  }

  fetchMessage(){
    this.homeService.fetch().subscribe((res: any) => {

      if (res.status == HttpStatusCode.Ok) {
        this.message = res.body.message;
      }
      this.spinner.hide();

    }, (err: any) => {
      this.spinner.hide();
      console.log(err);
    });

  }

}
