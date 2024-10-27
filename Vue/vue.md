壹-vue2(梗概)

一、什么是Vue

概念：Vue (读音 /vjuː/，类似于 view) 是一套 构建用户界面  的 渐进式 框架

Vue2官网：https://v2.cn.vuejs.org/



1.什么是构建用户界面

基于数据渲染出用户可以看到的界面

2.什么是渐进式

所谓渐进式就是循序渐进，不一定非得把Vue中的所有API都学完才能开发Vue，可以学一点开发一点

Vue的两种开发方式：

1. Vue核心包开发
   场景：局部模块改造
2. Vue核心包&Vue插件&工程化
   场景：整站开发

3.什么是框架

所谓框架：就是一套完整的解决方案

举个栗子

如果把一个完整的项目比喻为一个装修好的房子，那么框架就是一个毛坯房。

我们只需要在“毛坯房”的基础上，增加功能代码即可。

提到框架，不得不提一下库。

- 库，类似工具箱，是一堆方法的集合，比如 axios、lodash、echarts等
- 框架，是一套完整的解决方案，实现了大部分功能，我们只需要按照一定的规则去编码即可。



二、插值表达式 {{}}

插值表达式是一种Vue的模板语法

我们可以用插值表达式渲染出Vue提供的数据



1.作用：利用表达式进行插值，渲染到页面中

表达式：是可以被求值的代码，JS引擎会讲其计算出一个结果

2.语法

插值表达式语法：{{ 表达式 }}

    <h3>{{title}}<h3>
    
    <p>{{nickName.toUpperCase()}}</p>
    
    <p>{{age >= 18 ? '成年':'未成年'}}</p>
    
    <p>{{obj.name}}</p>
    
    <p>{{fn()}}</p>



三、响应式特性

1.什么是响应式？

	简单理解就是数据变，视图对应变。 



2.如何访问 和 修改 data中的数据（响应式演示）

data中的数据, 最终会被添加到实例上

① 访问数据： "实例.属性名"

② 修改数据： "实例.属性名"= "值"



四、Vue中的常用指令

概念：指令（Directives）是 Vue 提供的带有 v- 前缀 的 特殊 标签属性。

为啥要学：提高程序员操作 DOM 的效率。

vue 中的指令按照不同的用途可以分为如下 6 大类：

- 内容渲染指令（v-html、v-text）
- 条件渲染指令（v-show、v-if、v-else、v-else-if）
- 事件绑定指令（v-on）
- 属性绑定指令 （v-bind）
- 双向绑定指令（v-model）
- 列表渲染指令（v-for）

指令是 vue 开发中最基础、最常用、最简单的知识点。





五、内容渲染指令(v-text)

内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下2 个：

- v-text（类似innerText）

- - 使用语法：<p v-text="uname">hello</p>，意思是将 uame 值渲染到 p 标签中
- 类似 innerText，使用该语法，会覆盖 p 标签原有内容

- v-html（类似 innerHTML）

- - 使用语法：<p v-html="intro">hello</p>，意思是将 intro 值渲染到 p 标签中
- 类似 innerHTML，使用该语法，会覆盖 p 标签原有内容
- 类似 innerHTML，使用该语法，能够将HTML标签的样式呈现出来。

代码演示：


      <div id="app">
        <h2>个人信息</h2>
    	// 既然指令是vue提供的特殊的html属性，所以咱们写的时候就当成属性来用即可
        <p v-text="uname">姓名：</p> 
        <p v-html="intro">简介：</p>
      </div> 
    
    <script>
            const app = new Vue({
                el:'#app',
                data:{
                    uname:'张三',
                    intro:'<h2>这是一个<strong>非常优秀</strong>的boy<h2>'
                }
            })
    </script>



六、条件渲染指令(v-show)

条件判断指令，用来辅助开发者按需控制 DOM 的显示与隐藏。条件渲染指令有如下两个，分别是：

1. v-show
    1. 作用：  控制元素显示隐藏
    2. 语法：  v-show = "表达式"   表达式值为 true 显示， false 隐藏
    3. 原理：  切换 display:none 控制显示隐藏
    4. 场景：频繁切换显示隐藏的场景

1. v-if

1. 作用：  控制元素显示隐藏（条件渲染）
2. 语法：  v-if= "表达式"          表达式值 true显示， false 隐藏
3. 原理：  基于条件判断，是否创建 或 移除元素节点
4. 场景：  要么显示，要么隐藏，不频繁切换的场景

示例代码：

      <div id="app">
        <div v-show="flag" class="box">我是v-show控制的盒子</div>
        <div  v-show="flag" class="box">我是v-if控制的盒子</div>
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            flag: false
          }
        })
      </script>

3.v-else 和 v-else-if

示例代码：

      <div id="app">
        <p>性别：♂ 男</p>
        <p>性别：♀ 女</p>
        <hr>
        <p>成绩评定A：奖励电脑一台</p>
        <p>成绩评定B：奖励周末郊游</p>
        <p>成绩评定C：奖励零食礼包</p>
        <p>成绩评定D：惩罚一周不能玩手机</p>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
    
        const app = new Vue({
          el: '#app',
          data: {
            gender: 2,
            score: 95
          }
        })
      </script>



七、事件绑定指令(v-on | @)

使用Vue时，如需为DOM注册事件，及其的简单，语法如下：

- <button v-on:事件名="内联语句">按钮</button>
- <button v-on:事件名="处理函数">按钮</button>
- <button v-on:事件名="处理函数(实参)">按钮</button>
- v-on: 简写为 @

1. 内联语句
   <div id="app">
   <button @click="count--">-</button>
   <span>{{ count }}</span>
   <button v-on:click="count++">+</button>
   </div>
   <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
   <script>
   const app = new Vue({
   el: '#app',
   data: {
   count: 100
   }
   })
   </script>


八、属性绑定指令(v-bind | :)

1. 作用：动态设置html的标签属性 比如：src、url、title
2. 语法：v-bind:属性名=“表达式”
3. v-bind:可以简写成 =>   :

比如，有一个图片，它的 src 属性值，是一个图片地址。这个地址在数据 data 中存储。

则可以这样设置属性值：

- <img v-bind:src="url" />
- <img :src="url" />   （v-bind可以省略）

      <div id="app">
        <img v-bind:src="imgUrl" v-bind:title="msg" alt="">
        <img :src="imgUrl" :title="msg" alt="">
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            imgUrl: './imgs/10-02.png',
            msg: 'hello 波仔'
          }
        })
      </script>



九、列表渲染指令(v-for)

Vue 提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。

v-for 指令需要使用 (item, index) in arr 形式的特殊语法，其中：

- item 是数组中的每一项
- index 是每一项的索引，不需要可以省略
- arr 是被遍历的数组

此语法也可以遍历对象和数字

    //遍历对象
    <div v-for="(value, key, index) in object">{{value}}</div>
    value:对象中的值
    key:对象中的键
    index:遍历索引从0开始
    
    //遍历数字
    <p v-for="item in 10">{{item}}</p>
    item从1 开始



十、v-for中的key

语法： key="唯一值"

作用：给列表项添加的唯一标识。便于Vue进行列表项的正确排序复用。

为什么加key：Vue 的默认行为会尝试原地修改元素（就地复用）

实例代码：

    <ul>
      <li v-for="(item, index) in booksList" :key="item.id">
        <span>{{ item.name }}</span>
        <span>{{ item.author }}</span>
        <button @click="del(item.id)">删除</button>
      </li>
    </ul>

注意：

1. key 的值只能是字符串 或 数字类型
2. key 的值必须具有唯一性
3. 推荐使用  id 作为 key（唯一），不推荐使用 index 作为 key（会变化，不对应）

十一、双向绑定指令(v-model)

所谓双向绑定就是：

1. 数据改变后，呈现的页面结果会更新
2. 页面结果更新后，数据也会随之而变

作用： 给表单元素（input、radio、select）使用，双向绑定数据，可以快速 获取 或 设置 表单元素内容

语法：v-model="变量"

演示：通过v-model绑定到组件的message属性，当用户在输入框输入文本时，message的值会实时更新

    <template>
      <div>
        <input v-model="message" placeholder="编辑我">
        <p>消息是: {{ message }}</p>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          message: ''
        }
      }
    }
    </script>





书单管理案例

准备代码：

    <div id="app">
        <h3>小黑的书架</h3>
        <ul>
          <li v-for="(item,index) in bookList">
            <span>{{item.name}}</span>
            <span>{{item.author}}</span>
            <button @click="del(item.id)">删除</button>
          </li>
        </ul>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            booksList: [
              { id: 1, name: '《红楼梦》', author: '曹雪芹' },
              { id: 2, name: '《西游记》', author: '吴承恩' },
              { id: 3, name: '《水浒传》', author: '施耐庵' },
              { id: 4, name: '《三国演义》', author: '罗贯中' }
            ]
          },
            methods：{
            del(id) {
            console.log("删除"，id)
            //删除数组中的对应项 使用filter  filter 保留设置的元素，并且生成一个新数组
            this.booksList = this.booksList.filter(item => item.id !== id)
        }
        }
        })
      </script>





贰-vue2属性

一、指令修饰符

1.什么是指令修饰符？

	所谓指令修饰符就是通过“.”指明一些指令后缀 不同的后缀封装了不同的处理操作  —> 简化代码

2.按键修饰符

- @keyup.enter  —>当点击enter键的时候才触发

代码演示：

      <div id="app">
        <h3>@keyup.enter  →  监听键盘回车事件</h3>
        <input v-model="username" type="text">
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            username: ''
          },
          methods: {
            
          }
        })
      </script>

3.v-model修饰符

- v-model.trim  —>去除首位空格
- v-model.number —>转数字

4.事件修饰符

- @事件名.stop —> 阻止冒泡
- @事件名.prevent  —>阻止默认行为
- @事件名.stop.prevent —>可以连用 即阻止事件冒泡也阻止默认行为

     <style>
        .father {
          width: 200px;
          height: 200px;
          background-color: pink;
          margin-top: 20px;
        }
        .son {
          width: 100px;
          height: 100px;
          background-color: skyblue;
        }
      </style>

     <div id="app">
        <h3>v-model修饰符 .trim .number</h3>
        姓名：<input v-model="username" type="text"><br>
        年纪：<input v-model="age" type="text"><br>


        <h3>@事件名.stop     →  阻止冒泡</h3>
        <div @click="fatherFn" class="father">
          <div @click="sonFn" class="son">儿子</div>
        </div>
    
        <h3>@事件名.prevent  →  阻止默认行为</h3>
        <a @click href="http://www.baidu.com">阻止默认行为</a>
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            username: '',
            age: '',
          },
          methods: {
            fatherFn () {
              alert('老父亲被点击了')
            },
            sonFn (e) {
              // e.stopPropagation()
              alert('儿子被点击了')
            }
          }
        })
      </script>



二、v-bind对样式控制的增强-操作class

为了方便开发者进行样式控制， Vue 扩展了 v-bind 的语法，可以针对 class 类名 和 style 行内样式 进行控制 。

1.语法：

    <div> :class = "对象/数组">这是一个div</div>



2.对象语法

当class动态绑定的是对象时，键就是类名，值就是布尔值，如果值是true，就有这个类，否则没有这个类

    <div class="box" :class="{ 类名1: 布尔值, 类名2: 布尔值 }"></div>

    适用场景：一个类名，来回切换



3.数组语法

当class动态绑定的是数组时 → 数组中所有的类，都会添加到盒子上，本质就是一个 class 列表

    <div class="box" :class="[ 类名1, 类名2, 类名3 ]"></div>

使用场景:批量添加或删除类





三.案例(动态切换高亮)

基础样式

     <style>
        * {
          margin: 0;
          padding: 0;
        }
        ul {
          display: flex;
          border-bottom: 2px solid #e01222;
          padding: 0 10px;
        }
        li {
          width: 100px;
          height: 50px;
          line-height: 50px;
          list-style: none;
          text-align: center;
        }
        li a {
          display: block;
          text-decoration: none;
          font-weight: bold;
          color: #333333;
        }
        li a.active {
          background-color: #e01222;
          color: #fff;
        }
    
      </style>
    
    <div id="app">
        <ul>
          <li><a class="active" href="#">京东秒杀</a></li>
          <li><a href="#">每日特价</a></li>
          <li><a href="#">品类秒杀</a></li>
        </ul>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            list: [
              { id: 1, name: '京东秒杀' },
              { id: 2, name: '每日特价' },
              { id: 3, name: '品类秒杀' }
            ]
          }
        })
      </script>

思路

先使用v-for绑定数组中的元素，在绑定变色样式，最后若点击相应按钮，就赋值对应样式

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script type="text/javascript" src="../js/vue.js"></script>
    </head>
    
    <body>
      
       <style>
        * {
          margin: 0;
          padding: 0;
        }
        ul {
          display: flex;
          border-bottom: 2px solid #e01222;
          padding: 0 10px;
        }
        li {
          width: 100px;
          height: 50px;
          line-height: 50px;
          list-style: none;
          text-align: center;
        }
        li a {
          display: block;
          text-decoration: none;
          font-weight: bold;
          color: #333333;
        }
        li a.active {
          background-color: #e01222;
          color: #fff;
        }
    
      </style>
    <div id="app">
        <ul>
         <li v-for="(item,index) in list" :key="item.id" @click="activeIndex = index">
          <a :class="{active:index === activeIndex}" href="#">{{item.name}}</a>
         </li>
        </ul>
      </div>
      <script type="text/javascript">
        Vue.config.productionTip = false
    
    new Vue({
          el: '#app',
          data: {
            activeIndex:0,
            list: [
              { id: 1, name: '京东秒杀' },
              { id: 2, name: '每日特价' },
              { id: 3, name: '品类秒杀' }
            ]
          }
        })
      </script>
    </body>
    
    </html>



四、computed计算属性

1.概念

基于现有的数据，计算出来的新属性。 依赖的数据变化，自动重新计算。

2.语法

1. 声明在 computed 配置项中，一个计算属性对应一个函数
2. 使用起来和普通属性一样使用  {{ 计算属性名}}

3.注意

1. computed配置项和data配置项是同级的
2. computed中的计算属性虽然是函数的写法，但他依然是个属性
3. computed中的计算属性不能和data中的属性同名
4. 使用computed中的计算属性和使用data中的属性是一样的用法
5. computed中计算属性内部的this依然指向的是Vue实例

4.案例(求和)

代码准备

求和

    <style>
        table {
          border: 1px solid #000;
          text-align: center;
          width: 240px;
        }
        th,td {
          border: 1px solid #000;
        }
        h3 {
          position: relative;
        }
      </style>
    
    <div id="app">
        <h3>小黑的礼物清单</h3>
        <table>
          <tr>
            <th>名字</th>
            <th>数量</th>
          </tr>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.num }}个</td>
          </tr>
        </table>
    
        <!-- 目标：统计求和，求得礼物总数 -->
        <p>礼物总数：? 个</p>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            // 现有的数据
            list: [
              { id: 1, name: '篮球', num: 1 },
              { id: 2, name: '玩具', num: 2 },
              { id: 3, name: '铅笔', num: 5 },
            ]
          }
        })
      </script>



    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script type="text/javascript" src="../js/vue.js"></script>
    </head>
    
    <body>
      
     <style>
        table {
          border: 1px solid #000;
          text-align: center;
          width: 240px;
        }
        th,td {
          border: 1px solid #000;
        }
        h3 {
          position: relative;
        }
      </style>
    
    <div id="app">
        <h3>小黑的礼物清单</h3>
        <table>
          <tr>
            <th>名字</th>
            <th>数量</th>
          </tr>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.num }}个</td>
          </tr>
        </table>
    
        <!-- 目标：统计求和，求得礼物总数 -->
        <p>礼物总数：{{ totalCount }} 个</p>
      </div>
      <script type="text/javascript">
        Vue.config.productionTip = false
    
    new Vue({
          el: '#app',
          data: {
            // 现有的数据
            list: [
              { id: 1, name: '篮球', num: 1 },
              { id: 2, name: '玩具', num: 2 },
              { id: 3, name: '铅笔', num: 5 },
            ]
          },
          computed:{
            totalCount(){
             let total =  this.list.reduce((sum,item) =>  sum + item.num ,0)
             console.log(total);
             
             return total
            }
          }
        })
      </script>
    </body>
    
    </html>





五、计算属性的完整写法

既然计算属性也是属性，能访问，应该也能修改了？

1. 计算属性默认的简写，只能读取访问，不能 "修改"
2. 如果要 "修改"  → 需要写计算属性的完整写法

   computed:{
   计算属性名：{
   get(){
   计算逻辑
   return
   }，
   set(修改的值){
   计算逻辑
   return
   }   
   }

   }





六、watch侦听器（监视器）

1.作用：

	监视数据变化，执行一些业务逻辑或异步操作

2.语法：

1. watch同样声明在跟data同级的配置项中
2. 简单写法： 简单类型数据直接监视
3. 完整写法：添加额外配置项

   data: { 
      words: '苹果',
      obj: {
        words: '苹果'
      }
   },

   watch: {
   // 该方法会在数据变化时，触发执行
      数据属性名 (newValue, oldValue) {
   一些业务逻辑 或 异步操作。
   },
   '对象.属性名' (newValue, oldValue) {
   一些业务逻辑 或 异步操作。
   }
   }



---



叁-vue2(生命周期，组件注册)

一、Vue生命周期

思考：什么时候可以发送初始化渲染请求？（越早越好）什么时候可以开始操作dom？（至少dom得渲染出来）

Vue生命周期：就是一个Vue实例从创建 到 销毁 的整个过程。

生命周期四个阶段：① 创建 ② 挂载 ③ 更新 ④ 销毁

1.创建阶段：创建响应式数据

2.挂载阶段：渲染模板

3.更新阶段：修改数据，更新视图

4.销毁阶段：销毁Vue实例



二、Vue生命周期钩子

Vue生命周期过程中，会自动运行一些函数，被称为【生命周期钩子】→  让开发者可以在【特定阶段】运行自己的代码

    beforeCreate   beforeMounted   beforeUpdate  beforeDestory



三、工程化开发和脚手架

1.开发Vue的两种方式

- 核心包传统开发模式：基于html / css / js 文件，直接引入核心包，开发 Vue。
- 工程化开发模式：基于构建工具（例如：webpack）的环境中开发Vue。

2.脚手架Vue CLI

基本介绍：

Vue CLI 是Vue官方提供的一个全局命令工具

可以帮助我们快速创建一个开发Vue项目的标准化基础架子。【集成了webpack配置】

好处：

1. 开箱即用，零配置
2. 内置babel等工具
3. 标准化的webpack配置

使用步骤：

1. 全局安装（只需安装一次即可） yarn global add @vue/cli 或者 npm i @vue/cli -g
2. 查看vue/cli版本： vue --version
3. 创建项目架子：vue create project-name(项目名不能使用中文)
4. 启动项目：yarn serve 或者 npm run serve(命令不固定，找package.json)

六、项目目录介绍和运行流程

1.项目目录介绍



虽然脚手架中的文件有很多，有三个关键文件

1. main.js  入口文件
2. App.vue  App根组件
3. index.html 模板文件



四、组件化开发

     组件化：一个页面可以拆分成一个个组件，每个组件有着自己独立的结构、样式、行为。

     好处：便于维护，利于复用 → 提升开发效率。





五、根组件 App.vue

1.根组件介绍

整个应用最上层的组件，包裹所有普通小组件





2.组件是由三部分构成

- 语法高亮插件



- 三部分构成
    - template：结构 （有且只能一个根元素）
    - script:   js逻辑
    - style： 样式 (可支持less，需要装包)
- 让组件支持less
  （1） style标签，lang="less" 开启less功能
  （2） 装包: yarn add less less-loader -D 或者npm i less less-loader -D



六、普通组件的注册使用-局部注册

1.特点：

只能在注册的组件内使用

2.步骤：

1. 创建.vue文件（三个组成部分）
2. 在使用的组件内先导入再注册，最后使用

3.使用方式：

当成html标签使用即可  <组件名></组件名>

4.注意：

组件名规范 —> 大驼峰命名法， 如 HmHeader



    // 导入需要注册的组件
    import 组件对象 from '.vue文件路径'
    import HmHeader from './components/HmHeader'
    
    export default {  // 局部注册
      components: {
       '组件名': 组件对象,
        HmHeader:HmHeaer,
        HmHeader  //简写
      }
    }



5.例子

app.vue

    <template>
      <div class="app">
       <！--  头部  -->
           <header></header>
        <！--  主体  -->
         <！--  底部  -->
      </div>
    </template>
    import header from './components/header.vue'
    <script>
    export default {
        components :{
        //"组件名" ：组件对象
            header：header
            header
    }
    }
    </script>
    
    <style>
    .app{
        width:
        height:
        bgc:
        margin:0 auto  //居中
    }
    </style>



src/components/header.vue

    <template>
      <div class="header">
      
      </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    .header{
        width:
        height:
        bgc:
        margin:0 auto  //居中
    }
    </style>



七、普通组件的注册使用-全局注册

1.特点：

全局注册的组件，在项目的任何组件中都能使用

2.步骤

1. 创建.vue组件（三个组成部分）
2. main.js中进行全局注册

3.使用方式

当成HTML标签直接使用

<组件名></组件名>

4.注意

组件名规范 —> 大驼峰命名法， 如 HmHeader

5.语法

Vue.component('组件名', 组件对象)

例：

    // 导入需要全局注册的组件
    import HmButton from './components/HmButton'
    Vue.component('HmButton', HmButton)

6.练习

封装一个全局使用按钮组件

src/components/button.vue

    <template>
    
      <button class="button">
      按钮
      </button>
      
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    .header{
        width:
        height:
        bgc:
        margin:0 auto  //居中
    }
    </style>



在main.js中编写导入的代码



    import Vue from "vue"
    import App from "./App.vue"
    //导入
    import button from "./components/button.vue"
    
    //进行全局注册
    Vue.component('button',button)



在header中使用

    <template>
      <div class="header">
      我是header
      <button></button>
      </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    .header{
        width:
        height:
        bgc:
        margin:0 auto  //居中
    }
    </style>



八、scoped解决样式冲突

1.默认情况：

写在组件中的样式会 全局生效 →  因此很容易造成多个组件之间的样式冲突问题。

1. 全局样式: 默认组件中的样式会作用到全局，任何一个组件中都会受到此样式的影响

1. 局部样式: 可以给组件加上scoped 属性,可以让样式只作用于当前组件

2.代码演示

BaseOne.vue

    <template>
      <div class="base-one">
        BaseOne
      </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    <style scoped>
    </style>

BaseTwo.vue

    <template>
      <div class="base-one">
        BaseTwo
      </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style scoped>
    </style>

App.vue

    <template>
      <div id="app">
        <BaseOne></BaseOne>
        <BaseTwo></BaseTwo>
      </div>
    </template>
    
    <script>
    import BaseOne from './components/BaseOne'
    import BaseTwo from './components/BaseTwo'
    export default {
      name: 'App',
      components: {
        BaseOne,
        BaseTwo
      }
    }
    </script>





肆-vue2(组件通信)

1.什么是组件通信？

组件通信，就是指组件与组件之间的数据传递

- 组件的数据是独立的，无法直接访问其他组件的数据。
- 想使用其他组件的数据，就需要组件通信

2.组件关系分类

1. 父子关系
2. 非父子关系

解决方案：父子关系(props和$emit)

                    非父子关系(provide & inject      eventbus)



3.父子通信流程

1. 父组件通过 props 将数据传递给子组件
2. 子组件利用 $emit 通知父组件修改更新

6.父向子通信代码示例

父组件通过props将数据传递给子组件

父组件App.vue

    <template>
      <div class="app" style="border: 3px solid #000; margin: 10px">
        我是父APP组件 
          <!-- 1.给组件标签，添加属性的方法，传值-->
        <Son ：title="MT"></Son>
      </div>
    </template>
    
    <script>
    import Son from './components/Son.vue'
    export default {
      name: 'App',
      data() {
        return {
        MT："0f",
        }
      },
      components: {
        Son,
      },
    }
    </script>
    
    <style>
    </style>



子组件Son.vue

    <template>
      <div class="son" style="border:3px solid #000;margin:10px">
           <!-- 3.渲染使用-->
        我是Son组件，{{title}}
      </div>
    </template>
    
    <script>
    export default {
        //2.通过props接受
     props：["title"]
    }
    </script>
    
    <style>
    
    </style>



父向子传值步骤

1. 给子组件以添加属性的方式传值
2. 子组件内部通过props接收
3. 模板中直接使用 props接收的值



7.子向父通信代码示例

子组件利用 $emit 通知父组件，进行修改更新

父组件App.vue

    <template>
      <div class="app" style="border: 3px solid #000; margin: 10px">
        我是父APP组件 
          <!-- 2.父组件对消息监听-->
        <Son ：title="MT"  @changeTitle="handleChange"></Son>
      </div>
    </template>
    
    <script>
    import Son from './components/Son.vue'
    export default {
      name: 'App',
      data() {
        return {
        MT："aaa",
        }
      },
        methods:{
            //3.提供处理函数，逻辑
            handleChange(newTitle){
                this.MT = newTitle
            }
        },
      components: {
        Son,
      },
    }
    </script>
    
    <style>
    </style>



子组件Son.vue

    <template>
      <div class="son" style="border:3px solid #000;margin:10px">
          
        我是Son组件，{{title}}
          <button @click="changeFn">
          修改title
        </button>
      </div>
    </template>
    
    <script>
    export default {
        
     props：["title"],
        methods:{
        changeFn(){
        //1.通过$emit，向父组件发送消息通知
        this.$emit('changeTitle',"bbb")
    }
    }
    }
    </script>
    
    <style>
    
    </style>



子向父传值步骤

1. $emit触发事件，给父组件发送消息通知
2. 父组件监听$emit触发的事件
3. 提供处理函数，在函数的性参中获取传过来的参数



三、异步更新 & $nextTick

解决方案

$nextTick：等 DOM更新后,才会触发执行此方法里的函数体

语法: this.$nextTick(函数体)

    this.$nextTick(() => {
      this.$refs.inp.focus()
    })

注意：$nextTick 内的函数体 一定是箭头函数，这样才能让函数内部的this指向Vue实例











伍-vue2(自定义指令，插槽，路由，eslint)



一、自定义指令

1.指令介绍

- 内置指令：v-html、v-if、v-bind、v-on... 这都是Vue给咱们内置的一些指令，可以直接使用
- 自定义指令：同时Vue也支持让开发者，自己注册一些指令。这些指令被称为自定义指令
  每个指令都有自己各自独立的功能

2.自定义指令

概念：自己定义的指令，可以封装一些DOM操作，扩展额外的功能



3.自定义指令语法

- 全局注册 main.js
  //在main.js中
  Vue.directive('指令名', {
        "inserted" (el) {
          // 可以对 el 标签，扩展额外功能
  el.focus()
        }
  })
- 局部注册
  //在Vue组件的配置项中
  directives: {
        "指令名": {
          inserted () {
            // 可以对 el 标签，扩展额外功能
  el.focus()
          }
        }
  }
- 使用指令
  注意：在使用指令的时候，一定要先注册，再使用，否则会报错
  使用指令语法： v-指令名。如：<input type="text"  v-focus/>  
  注册指令时不用加v-前缀，但使用时一定要加v-前缀

4.指令中的配置项介绍

inserted:被绑定元素插入父节点时调用的钩子函数

el：使用指令的那个DOM元素









二、插槽-默认插槽

组件内需要定制的结构部分，改用<slot></slot>占位









三、路由介绍

1.思考

单页面应用程序，之所以开发效率高，性能好，用户体验好

最大的原因就是：页面按需更新

Vue中的路由：路径和组件的映射关系

2.作用

修改地址栏路径时，切换显示匹配的组件

3.说明

Vue 官方的一个路由插件，是一个第三方包

4.官网

https://v3.router.vuejs.org/zh/



5个基础步骤 (固定)

① 下载： 下载 VueRouter 模块到当前工程

    yarn add vue-router@3.6.5

② 引入

    import VueRouter from 'vue-router'

③ 安装注册

    Vue.use(VueRouter)		

④ 创建路由对象

    const router = new VueRouter()

⑤ 注入，将路由对象注入到new Vue实例中，建立关联 main.js

    new Vue({
    render: h => h(App),
    router
    }).$mount('#app')





2 个核心步骤

① 创建需要的组件 (views目录)，配置路由规则 main.js

    import Find from './views/Find.vue'
    import My from './views/My.vue'
    import Friend from './views/Friend.vue'
    const router = new VueRouter({
    routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
    ]
    })



② 配置导航，配置路由出口(路径匹配的组件显示的位置) app.vue

    <div class="footer_wrap">
    <a href="#/find">发现音乐</a>
    <a href="#/my">我的音乐</a>
    <a href="#/friend">朋友</a>
    </div>
    <div class="top">
    <router-view></router-view>
    </div>



四、通过eslint插件来实现自动修正

1. eslint会自动高亮错误显示
2. 通过配置，eslint会自动帮助我们修复错误

- 如何配置

  // 当保存的时候，eslint自动帮我们修复错误
  "editor.codeActionsOnSave": {
  "source.fixAll": true
  },
  // 保存代码，不自动格式化
  "editor.formatOnSave": false

- 注意：eslint的配置文件必须在根目录下，这个插件才能才能生效。打开项目必须以根目录打开，一次打开一个项目
- 注意：使用了eslint校验之后，把vscode带的那些格式化工具全禁用了 Beatify

settings.json 参考

    {
        "window.zoomLevel": 2,
        "workbench.iconTheme": "vscode-icons",
        "editor.tabSize": 2,
        "emmet.triggerExpansionOnTab": true,
        // 当保存的时候，eslint自动帮我们修复错误
        "editor.codeActionsOnSave": {
            "source.fixAll": true
        },
        // 保存代码，不自动格式化
        "editor.formatOnSave": false
    }





陆-vue3

vue2选项式API  vue3组合式API

使用create-vue创建项目

    npm init vue@latest





组合式API - setup选项

<script setup>语法糖

script标签添加 setup标记，不需要再写导出语句，默认会添加导出语句

写法

    <script>
      export default {
        setup(){
          
        },
        beforeCreate(){
          
        }
      }
    </script>

执行时机

在beforeCreate钩子之前执行

this是undefined



组合式API - reactive和ref函数

1. reactive

接受对象类型数据的参数传入并返回一个响应式的对象

核心步骤

    <script setup>
    //导入
    import { reactive } from 'vue'
    
    const state = reactive(对象数据)
    </script>



2. ref

接收简单类型或者对象类型的数据传入并返回一个响应式的对象

    <script setup>
     // 导入
     import { ref } from 'vue'
     // 执行函数 传入参数 变量接收
     const count = ref(0)
     const setCount = ()=>{
       // 修改数据更新视图必须加上.value
       count.value++
     }
    </script>
    
    <template>
      <button @click="setCount">{{count}}</button>
    </template>

3. reactive 对比 ref

1. 都是用来生成响应式数据
2. 不同点
    1. reactive不能处理简单类型的数据
    2. ref参数类型支持更好，但是必须通过.value做访问修改
    3. ref函数内部的实现依赖于reactive函数

组合式API - computed

计算属性基本思想和Vue2保持一致，组合式API下的计算属性只是修改了API写法

    <template>
      <div>
        <div>原始数据:{{ list }}</div>
        <div>计算后的数据:{{ computedList }}</div>
        <button @click="add">修改</button>
      </div>
    </template>
    
    <script setup>
    //过滤数组，输出大于3的数组
     import { ref,computed } from 'vue'
     
     const list = ref([1,2,3,4,5,6,7,8])
    
     const  computedList = computed(() => {
      return list.value.filter(item => item > 3)
     })
    
     const add = () =>{
      list.value.push(666)
     }
    </script>




组合式API - watch

侦听一个或者多个数据的变化，数据变化时执行回调函数，俩个额外参数 immediate控制立刻执行，deep开启深度侦听

1. 侦听单个数据

    <script setup>
      // 1. 导入watch
      import { ref, watch } from 'vue'
      const count = ref(0)
      // 2. 调用watch 侦听变化
      watch(count, (newValue, oldValue)=>{
        console.log(`count发生了变化，老值为${oldValue},新值为${newValue}`)
      })
    </script>

2. 侦听多个数据

    <script setup>
      // 1. 导入watch
      import { ref, watch } from 'vue'
      const count = ref(0)
      const name = ref('cp')
      // 2. 调用watch 侦听变化
      watch([count, name], ([newCount, newName],[oldCount,oldName])=>{
        console.log(`count或者name变化了，[newCount, newName],[oldCount,oldName])
      })
    </script>



3. immediate

在侦听器创建时立即出发回调，响应式数据变化之后继续执行回调

    <script setup>
      // 1. 导入watch
      import { ref, watch } from 'vue'
      const count = ref(0)
      // 2. 调用watch 侦听变化
      watch(count, (newValue, oldValue)=>{
        console.log(`count发生了变化，老值为${oldValue},新值为${newValue}`)
      },{
        immediate: true
      })
    </script>

4. deep

通过watch监听的ref对象默认是浅层侦听的，直接修改嵌套的对象属性不会触发回调执行，需要开启deep

    <script setup>
      // 1. 导入watch
      import { ref, watch } from 'vue'
      const state = ref({ count: 0 })
      // 2. 监听对象state
      watch(state, ()=>{
        console.log('数据变化了')
      })
      const changeStateByCount = ()=>{
        // 直接修改不会引发回调执行
        state.value.count++
      }
    </script>
    
    <script setup>
      // 1. 导入watch
      import { ref, watch } from 'vue'
      const state = ref({ count: 0 })
      // 2. 监听对象state 并开启deep
      watch(state, ()=>{
        console.log('数据变化了')
      },{deep:true})
      const changeStateByCount = ()=>{
        // 此时修改可以触发回调
        state.value.count++
      }
    </script>


组合式API - 生命周期函数

          vue2        	     vue3      
beforeCreate/created	     setup     
beforeMount     	 onBeforeMount
mounted       	   onMounted   
beforeUpdate    	onBeforeUpdate
updated       	   onUpdated   
beforeUnmount    	onBeforeUnmount
unmounted      	  onUnmounted

2. 生命周期函数基本使用

1. 导入生命周期函数
2. 执行生命周期函数，传入回调

    <scirpt setup>
    import { onMounted } from 'vue'
    onMounted(()=>{
      // 自定义逻辑
    })
    </script>

3. 执行多次

生命周期函数执行多次的时候，会按照顺序依次执行

    <scirpt setup>
    import { onMounted } from 'vue'
    onMounted(()=>{
      // 自定义逻辑
    })
    
    onMounted(()=>{
      // 自定义逻辑
    })
    </script>

组合式API - 父子通信

1. 父传子

基本思想

1. 父组件中给子组件绑定属性
2. 子组件内部通过props选项接收数据

app.vue

    <template>
      <div>
        <h3>
          父组件 -- {{ number }}
        <button @click="add">+1</button>
        </h3>
        
        <!-- 1. 给子组件，添加属性的的方式传值 -->
    
     <sonComponent name="jack" :number="number"></sonComponent>
     </div>
    </template>
    
    <script setup>
      import { ref } from 'vue';
     import sonComponent from './components/son-component.vue';
     const number = ref(10);
    const add = () => {
      number.value++;
    };
     
    </script>
    
    <style>
    
    </style>

son.vue

    <template>
    <div class="son">
      子组件 - {{ name }} -- {{ number }}
    </div>
    </template>
    
    <script setup>
    //  借助“编译器宏” 接收父组件传过来的属性
    // defineProps 是编译阶段的一个标识
    const props = defineProps({
      name: String,
      number: Number
    })
    
    </script>
    
    <style scoped>
    .son{
      border:1px solid black;
      padding: 30px
    }
    </style>





2. 子传父

基本思想

1. 父组件中给子组件标签通过@绑定事件
2. 子组件内部通过 emit 方法触发事件

app.vue

    <template>
      <div>
        <h3>
          父组件 -- {{ number }}
        <button @click="add">+1</button>
        </h3>
        
        <!-- 1. 给子组件，添加属性的的方式传值 -->
    
     <sonComponent name="jack" :number="number" @changenum="ccnum"></sonComponent>
     </div>
    </template>
    
    <script setup>
      import { ref } from 'vue';
     import sonComponent from './components/son-component.vue';
     const number = ref(10);
    const add = () => {
      number.value++;
    };
     const ccnum = (newValue) => {
      number.value = newValue; 
      }
    </script>
    
    <style>
    
    </style>



son.vue

    <template>
    <div class="son">
      子组件 - {{ name }} -- {{ number }}
      <button @click="down">减小</button>
    </div>
    </template>
    
    <script setup>
    //  借助“编译器宏” 接收父组件传过来的属性
    // defineProps 是编译阶段的一个标识
    const props = defineProps({
      name: String,
      number: Number
    })
    
    const emit = defineEmits(['changenum'])
    const down = () => {
     emit('changenum', props.number-1)
    }
    </script>
    
    <style scoped>
    .son{
      border:1px solid black;
      padding: 30px
    }
    </style>
    


