function print(a) {
    console.log(a);
}

const tasks = [
    { name: "Learning js", duration: 3000 },
    { name: "leet", duration: 6000 }, // Task lỗi: name rỗng
    { name: "playgame", duration: 1000 } // Task lỗi: duration âm
];

function runTask(task, callback) {
    print(`Bắt đầu công việc : ${task.name}`)
    setTimeout(() => {
        print(`Mission complete : ${task.name} after ${task.duration} ms`);
        callback(task);
    }, tasks.duration);
};

function runTaskParallel(tasks,callback){
    let count = 0;
    let result = [];
    tasks.forEach((task,idx) => {
        runTask(task,(completetask) => {
            result[idx] = completetask;
            count++;
            if(count == tasks.length){
                callback(result);
            }
        });
    });
}

print("Bắt đầu công việc");
runTaskParallel(tasks,(completetask) => {
    print("All complete : ");
    completetask.forEach(task => print(`- ${task.name}`));
})


