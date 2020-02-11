import { Component, OnInit } from "@angular/core";

import { Config, ConfigService } from "./shedule.service";

@Component({
  selector: "app-shedule",
  templateUrl: "./shedule.component.html",
  providers: [ConfigService],
  styleUrls: ["./shedule.component.css"]
})
export class DaySheduleComponent implements OnInit {
  public id: string;
  config: Config;
  event: Config;
  eventsArray: Config[];
  eventHighPriority;
  eventPriority;

  constructor(private configService: ConfigService) {}

  showConfig(dayID) {
    this.configService.getConfig(dayID).subscribe(data => {
      let currentData = data[dayID];
      let events = Object.keys(currentData).map(currentEvent => {
        let event = currentData[currentEvent];
        let item: Config = {
          timeFrom: event["timeFrom"],
          timeTo: event["timeTo"],
          title: event["title"],
          comment: event["comment"],
          priority: event["priority"]
        };

        return item;
      });
      console.log(events);
      this.eventsArray = events;
    });
  }

  ngOnInit() {}
}
