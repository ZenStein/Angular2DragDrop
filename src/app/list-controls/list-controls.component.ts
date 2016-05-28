import { Component, OnInit } from '@angular/core';
import { ListModelService } from '../list-model.service';

@Component({
  moduleId: module.id,
  providers:[ListModelService],
  selector: 'list-controls',
  templateUrl: 'list-controls.component.html',
  styleUrls: ['list-controls.component.css']
})
export class ListControlsComponent implements OnInit {

    private model
  constructor(listService: ListModelService) {
      this.model = listService


  }

  ngOnInit() {
      console.log("this")
      console.log(this.model.getModel())
  }

}
