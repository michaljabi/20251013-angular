import { from } from 'rxjs';
import { map, filter, tap, take } from 'rxjs/operators';

const number$ = from([1, 2, 3, 4, 5]);

// const toChapter = map(v =>  `Rozdział ${v}`)
const skipChaper = (chapterNo: number) => filter((v) => v !== chapterNo);

const chapters$ = number$.pipe(
  tap((v) => {
    console.log(v);
  }),
  skipChaper(1),
  tap((v) => {
    console.log(v);
  }),
  skipChaper(3),
  tap((v) => {
    console.log(v);
  }),
  skipChaper(2),
  map((v) => `Rozdział ${v}`),
  tap((v) => {
    console.log(v);
  })
);

number$.pipe(take(3)).subscribe((v) => {
  console.log(v);
});

chapters$.subscribe((c) => {
  console.log(c);
});
