import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tutorial } from '../../models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  removeTutorial(index){
    this.store.dispatch(new TutorialActions.RemoteTutorial(index));
  }

  ngOnInit() {

  }

}
