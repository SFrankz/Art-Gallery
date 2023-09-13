import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$!: WebSocket;
  private messageSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  public connect(): void {
    const serverUrl = 'ws://localhost:8080';
    this.socket$ = new WebSocket(serverUrl);

    this.socket$.onopen = (event: Event) => {
      console.log('WebSocket connection established');
    };

    this.socket$.onmessage = (event: MessageEvent) => {
      const message = event.data as string;
      this.messageSubject.next(message);
    };

    this.socket$.onclose = (event: CloseEvent) => {
      console.log('WebSocket connection closed');
    };
  }

  public getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  public sendMessage(message: string): void {
    if (this.socket$ && this.socket$.readyState === WebSocket.OPEN) {
      this.socket$.send(message);
    } else {
      console.error('WebSocket connection is not established.');
    }
  }

  public fetchPictures(): Observable<any[]> {
    return this.http.get<any[]>('/api/pictures');
  }
}
