import { Subject } from 'rxjs';

// HOT stream działa jak EventEmitter !!!
const mySubject = new Subject<number>();

// inne API, metody .next, .error i .complete - są publiczne !!!!

// mySubject.complete();

mySubject.next(200);

mySubject.subscribe((v: number) => {
  console.log(v);
});

mySubject.next(100);
mySubject.next(98);

setTimeout(() => {
  mySubject.subscribe((v: number) => {
    console.log(v);
  });
}, 2000);
