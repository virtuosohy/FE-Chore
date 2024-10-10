

# 壹-初识

## 一.回顾

### 1.为什么 JavaScript 可以在浏览器中被执行

不同的浏览器使用不同的 JavaScript 解析引擎：

- Chrome 浏览器 => V8
- Firefox 浏览器 => OdinMonkey（奥丁猴）
- Safri 浏览器 => JSCore
-  IE 浏览器 => Chakra（查克拉）



### 2.为什么 JavaScript 可以操作 DOM 和 BOM

每个浏览器都内置了 DOM、BOM 这样的 API函数，因此，浏览器中的 JavaScript 才可以调
用它们。



### 3.浏览器中的 JavaScript 运行环境

Chrome浏览器里面：

① V8 引擎负责解析和执行 JavaScript 代码。
② 内置 API (DOM，BOM、XMLHttpRequest)是由运行环境提供的特殊接口，只能在所属的运行环境中被调用。



## 二. Node.js 简介

### 1.什么是 Node.js

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
Node.js 的官网地址： https://nodejs.org/zh-cn/



### 2.Node.js 中的 JavaScript 运行环境

V8引擎+内置API(fs，path,http,querystring...)

> 注意：

① 浏览器是 JavaScript 的前端运行环境。
② Node.js 是 JavaScript 的后端运行环境。
③ Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API。



# 贰-内置API

## 一.fs文件系统模块

fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

例如：

- fs.readFile() 方法，用来读取指定文件中的内容
- fs.writeFile() 方法，用来向指定的文件中写入内容



如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：

```js
const fs = require('fs')
```





### 1.读取指定文件中的内容

#### fs.readFile() 的语法格式

使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：

```js
fs.readFile(path[,options],callback)
```

- 参数1：**必选**参数，字符串，表示文件的路径。


- 参数2：可选参数，表示以什么编码格式来读取文件。
- 参数3：**必选**参数，文件读取完成后，通过回调函数拿到读取的结果。





### 2. 向指定的文件中写入内容

#### fs.writeFile() 的语法格式

使用 fs.writeFile() 方法，可以向指定的文件中写入内容，语法格式如下：

```js
fs.writeFile(file,data[,options],callback)
```



- 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
-  参数2：必选参数，表示要写入的内容。
-  参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
-  参数4：必选参数，文件写入完成后的回调函数。





### 3.练习 - 考试成绩整理

核心实现步骤
① 导入需要的 fs 文件系统模块
② 使用 fs.readFile() 方法，读取素材目录下的 成绩.txt 文件
③ 判断文件是否读取失败
④ 文件读取成功后，处理成绩数据
⑤ 将处理完成的成绩数据，调用 fs.writeFile() 方法，写入到新文件 成绩-ok.txt 中



```js
const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf8', function (err, dataStr) {
  if(err){
    return console.log('文件读取失败' + err.message)  
  }
  // console.log('文件读取成功，内容是：' + result)

  //* 按照空格进行分割， 
 const arrOld = dataStr.split(' ')

 
  //* 循环分割后的数组  ，对字符串的替换操作  
const arrNew = [ ]
arrOld.forEach(item =>{
  arrNew.push(item.replace('=' ,':'))
})


  //* 把新数组的每一项，进行合并，得到一个新数组

  const newstr = arrNew.join('\r\n')
  console.log(newstr);
  
})

```





### 4.fs 模块 - 路径动态拼接的问题

解决方案：

```
__dirname
```



***



## 二.path路径模块

### 1.路径拼接

path.join()

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

```js
path.join([..paths])
```

参数解读：

-  ...paths  路径片段的序列
-  返回值:




### 2.获取路径中的文件名

path.basename() 的语法格式
使用 path.basename() 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

```js
path.basename(path[,ext])
```

参数解读：

- path  必选参数，表示一个路径的字符串
- ext  可选参数，表示文件扩展名
- 返回:  表示路径中的最后一部分



### 3.获取路径中的文件扩展名

path.extname() 的语法格式
使用 path.extname() 方法，可以获取路径中的扩展名部分，语法格式如下：

```js
path.extname(path)
```

参数解读：
path 必选参数，表示一个路径的字符串
返回:  返回得到的扩展名字符串



***



## 三.http模块

### 1.服务器相关概念

回顾：什么是客户端、什么是服务器？
在网络节点中，负责消费资源的电脑，叫做客户端；负责对外提供网络资源的电脑，叫做服务器。
http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。



服务器和普通电脑的区别在于，服务器上安装了 web 服务器软件，例如：IIS、Apache(PHP) 等。通过安装这些服务器软件，
就能把一台普通的电脑变成一台 web 服务器。

#### 1.IP

IP 地址的格式：通常用“点分十进制”表示成（a.b.c.d）的形式，其中，a,b,c,d 都是 0~255 之间的十进制整数。例如：用点分十进表示的 IP地址（192.168.1.1）

> 注意：

① 互联网中每台 Web 服务器，都有自己的 IP 地址，例如：大家可以在 Windows 的终端中运行 ping www.baidu.com 命令，即可查看到百度服务器的 IP 地址。
② 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个IP 地址，就能把自己的电脑当做一台服务器进行访问了。



#### 2.域名地址

尽管 IP 地址能够唯一地标记网络上的计算机，但IP地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的**域名（Domain Name）地址。**

IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器(DNS，Domain name server)的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供 IP 地址和域名之间的转换服务的服务器。
注意：
① 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
② 在开发测试期间， 127.0.0.1 对应的域名是 localhost，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。



#### 3.端口号

计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。
同样的道理，在一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个唯一的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理。

> 注意：

① 每个端口号不能同时被多个 web 服务占用。
② 在实际应用中，URL 中的 80 端口可以被省略。



### 2.创建最基本的 web 服务器

① 导入 http 模块
② 创建 web 服务器实例
③ 为服务器实例绑定 `request` 事件，监听客户端的请求
④ 启动服务器



步骤1 - 导入 http 模块
如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块：

导入http模块

```js
const http = require('http')
```



步骤2 - 创建 web 服务器实例
调用 http.createServer() 方法，即可快速创建一个 web 服务器实例：

```js
const server = http.createServer()
```



步骤3 - 为服务器实例绑定 request 事件
为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：

```js
server.on('request' ,(req , res) => {
    //只要有客户端请求服务器，就会触发request事件，从而调用事件处理函数
    console.log('成功')
})
```



步骤4 - 启动服务器
调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：

```js
server.listen(80,() => {
    console.log('http server running at http://127.0.0.1')
})
```





整体代码：

```js
// 1.导入 http 模块
const http = require('http')
// 2.创建 web 服务器实例
const server = http.createServer()
// 3.为服务器实例绑定 request 事件，监听客户端的请求
server.on('request' ,function(req , res) {
    //只要有客户端请求服务器，就会触发request事件，从而调用事件处理函数
    console.log('someone visit our website')
})
// 4.启动服务器
server.listen(80,() => {
    console.log('http server running at http://127.0.0.1')
})
```





#### req 请求对象

只要服务器接收到了客户端的请求，就会调用通过 server.on() 为服务器绑定的 request 事件处理函数。
如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：

```js
server.on('request' ,function(req , res) {
    //req是请求对象，它包含了与客户端相关的数据和属性
    //req.url是客户端请求的url地址
    //req.method是客户端的method请求类型
    const str = `URl is ${req.url},and require method is ${req.method}`
    console.log(str)
})
```





#### res 响应对象

在服务器的 request 事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式：

使用res.end方法，向客户端相应一些内容

```js
res.end()
```





#### 解决中文乱码问题

当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式：

```js
server.on('request' ,function(req , res) {
    //req是请求对象，它包含了与客户端相关的数据和属性
    //req.url是客户端请求的url地址
    //req.method是客户端的method请求类型
    const str = `URl 是 ${req.url},请求方法是 ${req.method}`
    //防止乱码，需要设置响应头
     res.setHeader('Content-Type','text/html;charset=utf8')
    console.log(str)
     res.end(str)
})
```



#### 根据不同的 url 响应不同的 html 内容

##### 核心实现步骤

① 获取请求的 url 地址
② 设置默认的响应内容为 404 Not found
③ 判断用户请求的是否为 / 或 /index.html 首页
④ 判断用户请求的是否为 /about.html 关于页面
⑤ 设置 Content-Type 响应头，防止中文乱码
⑥ 使用 res.end() 把内容响应给客户端



```js
// 1.导入 http 模块
const http = require('http')
// 2.创建 web 服务器实例
const server = http.createServer()
// 3.为服务器实例绑定 request 事件，监听客户端的请求
server.on('request' ,function(req , res) {
   const url = req.url
   let content = '<h1>404 Not Found!</h1>'   //* 定义默认的响应内容
if(url === '/'||url === '/index.html') {
  content = '<h1>首页</h1>'   //* 定义首页的响应内容
} else if(url === '/about.html') {
  content = '<h1>关于</h1>'   //* 定义关于的响应内容
} 
 res.setHeader('Content-Type','text/html;charset=utf8')
 res.end(content)
})
// 4.启动服务器
server.listen(80,() => {
    console.log('http server running at http://127.0.0.1')
})
```





### 3. 案例 - 实现 clock 时钟的 web 服务器

#### 1.核心思路

把文件的实际存放路径，作为每个资源的请求 url 地址。



#### 2.实现步骤

① 导入需要的模块
② 创建基本的 web 服务器
③ 将资源的请求 url 地址映射为文件的存放路径
④ 读取文件内容并响应给客户端
⑤ 优化资源的请求路径



```js
//* 1.1  导入http模块
const http = require('http');
//* 1.2   导入fs模块
const fs = require('fs');
//* 1.3  导入path模块
const path = require('path');


//* 2.1  创建http服务器
let server = http.createServer();
//* 2.2  监听http服务器
server.on('request' ,function(req , res) {
   //* 3.1  获取客户端请求的url地址 
      const url = req.url
      //* 3.2  把请求的url映射为具体文的存放路径
      let fpath = ''
      if (url === '/') {
        fpath = path.join(__dirname , './clock/index.html')
      }else {
        fpath = path.join(__dirname ,'./clock', url)
      }

       //*  4.1 根据文件路径读取文件内容
        fs.readFile(fpath ,'utf8', function (err, dataStr) {
           //* 4.2  如果文件读取失败，则返回404页面 
          if (err) return res.end('404 not found')
          //* 4.3  如果文件读取成功，则返回文件内容
          
          res.end(dataStr)
})
})
//* 2.3    启动服务器
server.listen(80,() => {
    console.log('http server running at http://127.0.0.1')
})

```



