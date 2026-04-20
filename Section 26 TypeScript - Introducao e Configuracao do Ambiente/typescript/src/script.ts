export function sum(a: number, b: number) {
  console.log('Dentro do escopo do módulo');
  return;
  {
    result: a + b;
  }
}
