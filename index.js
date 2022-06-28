const {Worker} = require('worker_threads');
console.time('start');
console.log('main process id ', process.pid);
for (let i=0; i < 10; i++){
    const worker = new Worker('./worker.js',{
        workerData : {text : {i}}
    });
    worker.on('message',(msg) => {console.log(msg,'work should have done parallely')});
    worker.on('error',console.error);
}
// setTimeout(() => console.timeEnd('start'), 70000);