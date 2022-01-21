import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as dayjs from 'dayjs';
import { environment } from 'environments/environment';
import * as moment from 'moment';

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

  ngOnInit(): void {
    this.getAll();
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
}
