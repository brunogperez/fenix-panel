import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/index';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorUsers } from '../store/user.selectors';
import { UserActions } from '../store/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  userId$: string;
  user$: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.userId$ = this.activatedRoute.snapshot.params['id'];
    this.user$ = this.store
      .select(selectorUsers)
      .pipe(
        map(
          (students) =>
            students.find((student) => student._id === this.userId$)!
        )
      );
  }
  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }
}
