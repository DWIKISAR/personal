function hello() {
  console.log("Hello Word");
}

function goodbye() {
  console.log("Goodbye cruel world");
}

function print(callback) {
  callback();
}

print(hello);
print(goodbye);
