const {parentPort, workerData, threadId} = require('worker_threads');
const process = require('process');

async function multiLog(){
    for (let i=0; i<100; i++){const msg = 'helllo'; const stringArr = msg.split(''); /* console.log(stringArr) */}
    console.log('thread id :',threadId);
    parentPort.postMessage(workerData.text);
}
multiLog();