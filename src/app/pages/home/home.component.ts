import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { HttpStatusCode } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  message: string | undefined;

  ngOnInit() {
    this.fetchMessage();

  }

  fetchMessage(){
    this.homeService.fetch().subscribe({
      next: (res:any) =>{
        if (res.status == HttpStatusCode.Ok) {
          this.message = res.body.message;
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });

  }
  /*(res: any) => {

      if (res.status == HttpStatusCode.Ok) {
        this.message = res.body.message;
      }
    
    }, (err: any) => {
     
      console.log(err);
    }*/

}
