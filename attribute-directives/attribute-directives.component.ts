import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {
flag=true;
headingClasses=['bg-success','text-white'];
  constructor() { }

  ngOnInit() {
    setInterval(()=>
    {
      this.flag=!this.flag;
    },1000)

  }

}
