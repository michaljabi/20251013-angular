// Programowanie funkcyjne:

const numbers = [1, 2, 3, 4, 5];

// Tworzą nową tablicę ZAWSZE
// .filter() - zmienia ilość ale tylko w dół (lub w cale)
// .map() - NIGDY nie zmienia ilości elementów w tablicy

// .reduce() - gdzie map i filter nie może tam reduce pośle (ALl in one tool)

// To jest PURE function:
const toChapter = (v: number): string => `Rozdział ${v}`;
// const skipChaper2 = (v: number): boolean => v !== 2;
const skipChaper = (chapterNo: number) => (v: number): boolean => v !== chapterNo;

// ten zapis z => to jest nic innego jak to:

const mapToChapter2 = (v: number) => {
  return `Rozdział ${v}`;
};

// const chapters: string[] = numbers.map((n: number) => `.hapter #${n}`);
const chapters: string[] = numbers.filter(skipChaper(3)).map(toChapter);

console.log(chapters);
console.log(numbers);
