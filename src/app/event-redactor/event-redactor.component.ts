import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "event-redactor",
  templateUrl: "./event-redactor.component.html",
  styleUrls: ["./event-redactor.component.css"]
})
export class EventRedactorComponent implements OnInit {
  profileForm = new FormGroup({
    timeFrom: new FormControl(""),
    timeTo: new FormControl(""),
    title: new FormControl(""),
    comment: new FormControl(""),
    priority: new FormControl("")
  });
  constructor() {}

  show() {
    console.log(this.profileForm.value);
  }

  ngOnInit() {}
}
