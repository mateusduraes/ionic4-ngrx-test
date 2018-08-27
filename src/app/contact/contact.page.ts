import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';


interface CounterState {
  count: number;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(){}

}
