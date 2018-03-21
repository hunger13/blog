html='<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/main.css">
  <title></title>
</head>
<body>
  
</body>
</html>'

css='h1{color: red;}'

js='
  var string = "Hello World"
  alert(string)
'

[ ! $1 ] && echo 请输入项目名称 && exit 1
[ -d $1 ] && echo 重复创建 && exit 2

mkdir $1
cd $1
echo "$html" > index.html
mkdir css sass scripts images
touch sass/main.scss scripts/main.js css/style.css
echo "$css" > ./css/style.css
echo "$js" > ./scripts/main.js
exit 0
