export function greet(name: string): string {
  return `Hello ${name}`;
}

const checkKeyof = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const x = {
  name: "Hung",
  age: 30,
};
checkKeyof(x, "age");

type ArrayType<T> = T extends (infer U)[] ? U : never;
type MyArray = ArrayType<number[]>; // MyArray is of type string

type ObjectType<T> = T extends { [key: string]: infer U } ? U : never;
type MyObject = ObjectType<{ name: string; age: number }>; // MyObject is of type {name:string, age: number}

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type R1 = ReturnType<string>; // string
type R2 = ReturnType<() => void>; // void

const check: R1 = "";
