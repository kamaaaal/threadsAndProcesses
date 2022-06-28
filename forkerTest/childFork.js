if (process.argv[2] === 'child') {
    setTimeout(() => {
      console.log("child processID : ",process.pid," from parent(id) : ",process.ppid);
      console.log(`Hello from ${process.argv[2]}!`);
    }, 1_000);
}