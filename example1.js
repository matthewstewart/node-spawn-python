const spawn = require("child_process").spawn;
const arg1 = "Hello World";
const pythonProcess = spawn('python',["script1.py", arg1]);

pythonProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

pythonProcess.on('exit', (code) => {
  console.log(`Python script finished. Exit code is ${code}`);
});
