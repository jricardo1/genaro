import {Component, OnInit} from '@angular/core';
import {AlarmCodes} from '../Models/alarmCodes';

import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  alarmCodes: AlarmCodes[];
  filterTerm;

  constructor(private http: HttpClient) {
    this.alarmCodes = Array<AlarmCodes>();
    this.filterTerm= '';
  }

  ngOnInit() {
    this.alarmCodes = Array<AlarmCodes>();
    // Load data from CSV
    this.http.get('assets/alarmCodes/Code_Label.csv', {responseType: 'text'} ).pipe(
      map((data) => {

      return data;
    })
    ).subscribe((data)=>{
      console.log('Data');
      const tmp = data;
      const list = tmp.split('\n');
      for(const line of list){
        let item = line.split(',');
        this.alarmCodes.push(new AlarmCodes(item[0], item[1]));
        console.log(line);
      }



    });

  }
  selectEntry(alarmCode: AlarmCodes){
    alarmCode.isSelected = true;
    this.filterTerm = '';
  }
  search(event) {

  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    requestAnimationFrame(() => {

      /*items.forEach((item) => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });*/
    });
  }

}
