import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ebelier-v2-web';

  ngOnInit(): void {
    initFlowbite();
  }
}
