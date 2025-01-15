import { Injectable } from '@angular/core';
import { concatMap, forkJoin, map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from '../../features/dashboard/subscribers/models';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  private apiBaseURL = environment.apiBaseURL;

  constructor(private httpClient: HttpClient) {}

  createSubscriber(data: Omit<Subscriber, 'id'>): Observable<Subscriber> {
    return this.httpClient.post<Subscriber>(`${this.apiBaseURL}/subscribers`, {
      ...data,
      createdAt: new Date().toISOString(),
    });
  }

  getSubscribers(): Observable<Subscriber[]> {
    return this.httpClient.get<Subscriber[]>(`${this.apiBaseURL}/subscribers`);
  }

  getSubscriberById(id: string): Observable<Subscriber> {
    return this.httpClient.get<Subscriber>(
      `${this.apiBaseURL}/subscribers/${id}`
    );
  }

  searchsubscribers(name: string): Observable<Subscriber[]> {
    const APISEARCH = `${this.apiBaseURL}/subscribers?firstName=${name}`;
    return this.httpClient
      .get<Subscriber[]>(APISEARCH)
      .pipe(map((res: Subscriber[]) => res));
  }

  updateSubscriberById(_id: string, update: Partial<Subscriber>) {
    return this.httpClient
      .patch<Subscriber>(`${this.apiBaseURL}/subscribers/${_id}`, update)
      .pipe(concatMap(() => this.getSubscribers()));
  }

  updateRemainingDays(_id: string, remainingDays: number): Observable<Subscriber[]> {
    return this.httpClient
      .patch<void>(`${this.apiBaseURL}/subscribers/${_id}`, {
        remainingDays,
      })
      .pipe(concatMap(() => this.getSubscribers()));
  }

  updateSubscriberEndDate(
    id: string,
    subscriptionEndDate: string
  ): Observable<Subscriber[]> {
    return this.httpClient
      .patch<Subscriber>(`${this.apiBaseURL}/subscribers/${id}`, {
        subscriptionEndDate,
      })
      .pipe(concatMap(() => this.getSubscribers()));
  }

  removeSubscriberById(id: string): Observable<Subscriber[]> {
    return this.httpClient
      .delete<Subscriber>(`${this.apiBaseURL}/subscribers/${id}`)
      .pipe(concatMap(() => this.getSubscribers()));
  }
}
