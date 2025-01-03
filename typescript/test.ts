const names: string[] = [];

names.push('Dylan'); // no error

names.push('3'); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);
