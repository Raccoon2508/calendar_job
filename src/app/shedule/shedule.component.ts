import { Component, OnInit } from '@angular/core';

import { Config, ConfigService } from './shedule.service';



@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./shedule.component.css']
})
export class DaySheduleComponent implements OnInit {
  public id: string;
  config: Config;
  data;

  constructor(private configService: ConfigService) {}

  showConfig() {
    this.configService.getConfig()
      .subscribe(data=>{console.log(data);
      this.data = data;})
        
  }
  

 ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id );
}
}