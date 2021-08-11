// console.log(process.argv);

function consoleToJSON() {
  const obj = {};

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split('=');

    obj[arg[0]] = arg[1] ? arg[1] : true;
  }

  return obj;
}

console.log(consoleToJSON());
