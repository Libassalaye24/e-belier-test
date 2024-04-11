import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() page: any;
  @Input() filename: any | 'export';
  @Input() url: any;
  @Input() dateStart: any | null;
  @Input() dateEnd :any | null;
  @Input() statut :any | null;
  @Output() pagerEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.page)
    this.page = {currentPage:5, lastPage: 5}
  }

  paginate(index: number) {
    this.pagerEvent.emit(index);
  }
  

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' });
    const url= window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = this.filename+'.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
    //window.open(url);
  }
}
