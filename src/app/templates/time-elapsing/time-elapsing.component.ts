import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'environments/environment';
import * as moment from 'moment';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-time-elapsing',
  templateUrl: './time-elapsing.component.html',
  styleUrls: ['./time-elapsing.component.css'],
})
export class TimeElapsingComponent implements OnInit {
  timespans: any;
  form = this.formBuilder.group({
    content: '',
  });
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  @ViewChild('input') input: any;
  ngOnInit(): void {
    this.getAll();
    fromEvent(window, 'keyup').subscribe((event: any) => {
      if (event.key === '/') {
        console.log(event.key);
        this.input.nativeElement.click();
      }
    });
  }

  onSubmit() {
    const value = this.form.value;
    this.add(value.content).subscribe({
      next: (result) => {
        console.log(result, 'result');
        this.getAll();
      },
    });

    this.form.reset();
  }

  private add(content: string) {
    // 与上时刻的差
    const span = this.timespans.length
      ? moment().diff(this.timespans[0].date, 'm')
      : 0;
    return this.http.post(environment.apiUrl + '/timespans', {
      date: new Date(),
      span,
      content,
    });
  }

  getAll() {
    this.http
      .get<Array<any>>(environment.apiUrl + '/timespans/today')
      .subscribe((value) => {
        this.timespans = value.reverse();
      });
  }

  enter() {
    alert('hello');
  }
}
