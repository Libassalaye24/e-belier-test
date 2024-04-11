import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bl-block',
  templateUrl: './bl-block.component.html',
  styleUrls: ['./bl-block.component.scss']
})
export class BlBlockComponent implements OnInit{

  @Input() blNumber : string = '';
  @Input() brtwr : string = '';
  @Input() quantity : string = '';
  @Input() product : string = '';
  @Output() downloadClicked = new EventEmitter<string>();

  constructor(){}

  ngOnInit() : void{

  }

  downLoad(blNumber: string) {
    this.downloadClicked.emit(blNumber);
  }
}
