function print(maze,r,c,path){
    if(r == maze.length-1 && c == maze[0].length-1){
      path[r][c] = 1
      for(var i = 0;i < path.length;i++){
        console.log(path[i])
      }
      console.log()
      return
    }
    if(maze[r][c] == 0){
      return
    }
    path[r][c] = 1
    if(r < maze.length-1){
      print(maze,r+1,c,path)
    }
    if(c < maze[0].length-1){
      print(maze,r,c+1,path)
    }
    path[r][c] = 0
  }
  function runProgram(input) {
    // Write input assigning code here
    var maze = [[1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]]
    var path = [...Array(maze.length)].map(e => Array(maze[0].length).fill(0))
    print(maze,0,0,path)
  }
    
  if (process.env.USER === "") {
  runProgram(``);
  } else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
  }