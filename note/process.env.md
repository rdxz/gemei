`process`对象是 Node 的一个全局对象，提供当前 Node 进程的信息。它可以在脚本的任意位置使用，不必通过`require`命令加载。该对象部署了`EventEmitter`接口。

## 属性

`process`对象提供一系列属性，用于返回系统信息。

- `process.argv`：返回一个数组，成员是当前进程的所有命令行参数。
- `process.env`：返回一个对象，成员为当前Shell的环境变量，比如`process.env.HOME`。
- `process.installPrefix`：返回一个字符串，表示 Node 安装路径的前缀，比如`/usr/local`。相应地，Node 的执行文件目录为`/usr/local/bin/node`。
- `process.pid`：返回一个数字，表示当前进程的进程号。
- `process.platform`：返回一个字符串，表示当前的操作系统，比如`Linux`。
- `process.title`：返回一个字符串，默认值为`node`，可以自定义该值。
- `process.version`：返回一个字符串，表示当前使用的 Node 版本，比如`v7.10.0`。

`process`对象还有一些属性，用来指向 Shell 提供的接口。

### process.env

`process.env`属性返回一个对象，包含了当前Shell的所有环境变量。比如，`process.env.HOME`返回用户的主目录。

通常的做法是，新建一个环境变量`NODE_ENV`，用它确定当前所处的开发阶段，生产阶段设为`production`，开发阶段设为`develop`或`staging`，然后在脚本中读取`process.env.NODE_ENV`即可。

运行脚本时，改变环境变量，可以采用下面的写法。

```bash
$ export NODE_ENV=production && node app.js
# 或者
$ NODE_ENV=production node app.js
```