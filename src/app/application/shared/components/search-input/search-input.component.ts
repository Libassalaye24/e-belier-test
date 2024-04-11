import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {

  @Input() placeholder = 'Tapez ici la recherche';
  @Output() searchEvent = new EventEmitter<any>();
  @ViewChild('input', {static: true}) input: ElementRef = {} as ElementRef;
  value = new FormControl("");
  
  ngAfterViewInit() {
    // fromEvent(this.input.nativeElement, 'keyup')
    //     .pipe(
    //         filter(Boolean),
    //         debounceTime(800),
    //         distinctUntilChanged(),
    //         tap((event: any) => {
    //           const search = this.input.nativeElement.value;

    //           this.searchEvent.emit(search);
    //         })
    //     )
    //     .subscribe();
  }

  ngOnInit(): void {
  }

  search(): void {
    this.searchEvent.emit(this.value.value);
  }
}
