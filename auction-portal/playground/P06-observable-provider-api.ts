import { Observable, Subscriber } from 'rxjs';

// PROVIDER API:

const myFirstObservable$: Observable<number> = new Observable((subscriber: Subscriber<number>) => {
  console.log('?');

  subscriber.next(200);
  //subscriber.complete();
  //subscriber.error(new Error('OH nooo!'));

  setTimeout(() => {
    subscriber.next(300);
  }, 5000);
});

// Observables są LAZY by default.
// Nie subskrybenta - nie ma emisji!

myFirstObservable$.subscribe({
  next: (v) => {
    console.log(v);
  },
  error: (e) => {
    console.log(e.message);
  },
  complete: () => {
    console.log('COMPLETED!');
  },
});

myFirstObservable$.subscribe((v: number) => {
  console.log(v);
});

setTimeout(() => {
  myFirstObservable$.subscribe((v: number) => {
    console.log(v);
  });
}, 2000);
