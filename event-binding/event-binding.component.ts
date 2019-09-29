import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { console.log('constructor is called')}
  printSearch(search)
  {
    console.log(search.value);
  }
  ngOnInit() {
    console.log('init working')
  }

}
