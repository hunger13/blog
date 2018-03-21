var fs = require('fs');
var path = require('path');
//使用时第二个参数可以忽略  
function mkdir(dirpath, dirname) {
    //判断是否是第一次调用  
    if (typeof dirname === "undefined") {
        if (!fs.existsSync(dirpath)) {
            mkdir(dirpath, path.dirname(dirpath));
        }
    } else {
        //判断第二个参数是否正常，避免调用时传入错误参数  
        if (dirname !== path.dirname(dirpath)) {
            mkdir(dirpath);
            return;
        }
        if (fs.existsSync(dirname)) {
            fs.mkdirSync(dirpath)
        } else {
            mkdir(dirname, path.dirname(dirname));
            fs.mkdirSync(dirpath);
        }
    }
}

var dirName = process.argv[2]
var CSSPath = __dirname + "/" + dirName + "/css"
var JSPath = __dirname + "/" + dirName + "/js"

mkdir(CSSPath)
mkdir(JSPath)

fs.writeFileSync(__dirname + "/" + dirName + "/index.html", ` <!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>`)
fs.writeFileSync(CSSPath + "/style.css", ` h1{color: red;}`)
fs.writeFileSync(JSPath + "/main.js", ` var string = "Hello World"
    alert(string)`)
process.exit(0)