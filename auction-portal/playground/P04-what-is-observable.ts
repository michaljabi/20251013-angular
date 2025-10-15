import { of, Observable } from 'rxjs'; // 3rd party lib dla Angulara

const numbers = [1, 2, 3];

// PROVIDER:
const number$: Observable<number> = of(1, 2, 3);

// Masz w głowie 2 pytania widząc strumień z RxJS
// 1. Czy strumień jest skończony czy nieskończony ?

// CONSUMER #1:
number$.subscribe({
  next: (v: number) => {
    console.log(v);
  },
  error: (err: any) => {
    console.log(err);
  },
  complete: () => {
    console.log('Completed!');
  },
});

// 2. Czy strumień jest HOT (event emitter) czy COLD ?
// - domyślnie Observable jest Cold
// - natomiast Subject jest Hot

// CONSUMER:
number$.subscribe((v: number) => {
  console.log(v);
});

setTimeout(() => {
  // CONSUMER 2:
  number$.subscribe((v: number) => {
    console.log(v);
  });
}, 4000);

