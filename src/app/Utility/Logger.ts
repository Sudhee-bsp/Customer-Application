//browser console
//email
//db
export interface ILogger{
    Log();
}

export class BaseLogger implements ILogger{
    Log(){
        console.log("BaseLogger");
    }
}

export class ConsoleLogger implements BaseLogger{
    Log(){
        console.log("Using console Logger");
    }
}

export class DbLogger implements BaseLogger{
    Log(){
        console.log("Using DB Logger");
    }
}

export class FileLogger implements BaseLogger{
    Log(){
        console.log("Using File Logger");
    }
}