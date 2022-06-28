console.time('start');
for (let i=0; i < 10; i++){
    for (let i=0; i<100; i++){const msg = 'helllo'; const stringArr = msg.split(''); /* console.log(stringArr) */}
    console.log('process id :',process.pid);
    console.log('text is ',i,' work should\'nt have done parallely');
}
console.timeEnd('start');