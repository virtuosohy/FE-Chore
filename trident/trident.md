

# 壹：HTML 基础

## 01-标签语法

### 标签结构

- 标签要成对出现，中间包裹内容
- <>里面放英文字母（标签名）
- 结束标签比开始标签多 /
- 标签分类：双标签和单标签

```html
<strong>需要加粗的文字<strong>
<br>  //换行
<hr>   //水平线
```



## 02-HTML骨架

- html：整个网页
- head：网页头部，用来存放给浏览器看的信息，例如 CSS
    - title：网页标题
- body：网页主体，用来存放给用户看的信息，例如图片、文字



```html
<html>
  <head>
    <title>网页标题</title>
  </head>
  <body>
    网页主体
  </body>
</html>
```





## 03-标题标签

> 一般用在新闻标题、文章标题、

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

显示特点：

- 文字加粗
- 字号逐渐减小
- 独占一行（换行）

> 注意

1. h1 标签在一个网页中只能用一次，用来放新闻标题或网页的 logo
2. h2 ~ h6 没有使用次数的限制



## 04-段落标签

```html
<p>段落</p>
```

显示特点：

- 独占一行
- 段落之间存在间隙



## 05-文本格式化标签

````html
<strong> 加粗 </strong>    <b>
    <em> 倾斜 </em>         <i>
    <ins>下划线  </ins>     <u>
    <del>删除线 </del>       <s>

````



## 06-图像标签

作用：在网页中插入图片

```html
<img  src="图片的 URL">
```

src用于指定图像的位置和名称，是 `<img>` 的必须属性。



### 图像属性

| 属性         | 作用                                      |
| ------------ | ----------------------------------------- |
| alt          | 替换文本 图片无法显示时显示的文字         |
| title        | 显示文本 鼠标悬停在图片上面时候显示的文字 |
| width/height | 图片的宽度和高度   值为数字               |

## 07-路径

概念：路径指的是查找文件时，从**起点**到**终点**经历的**路线**。

路径分类：

- 相对路径：从当前文件位置出发查找目标文件
- 绝对路径：从盘符出发查找目标文件
    - Windows 电脑从盘符出发
    - Mac 电脑从根目录出发



### 相对路径

查找方式：从**当前文件位置**出发查找目标文件

特殊符号：

- **/** 表示进入某个文件夹里面          → 文件夹名/
- **. ** 表示当前文件所在文件夹           → ./
- **..** 表示当前文件的上一级文件夹 → ../



### 绝对路径

查找方式：Windows 电脑从盘符出发；Mac 电脑从根目录（/）出发

```html
<img  src="C:\images\a.jpg">
```



> 注意：Windows 默认是 \ ，其他系统是 /，建议统一写为 /



## 08-超链接标签

作用：点击跳转到其他页面。

```html
<a href="https://www.baidu.com">跳转到百度</a>
```

> href 属性值是跳转地址，是超链接的必须属性。

> 超链接默认是在当前窗口跳转页面，添加 **target="_blank"** 实现**新窗口**打开页面。

> 拓展：开发初期，不确定跳转地址，则 href 属性值写为 **#**，表示**空链接**，页面不会跳转，在当前页面刷新一次。



```html
<a href="https://www.baidu.com/">跳转到百度</a>

<!-- 跳转到本地文件：相对路径查找 --> 
<!-- target="_blank" 新窗口跳转页面 --> 
<a href="./01-标签的写法.html" target="_blank">跳转到01-标签的写法</a>

<!-- 开发初期，不知道超链接的跳转地址，href属性值写#，表示空链接，不会跳转 -->
<a href="#">空链接</a>
```



## 09-音频

```html
<audio src="音频的 URL"></audio>
```

常用属性

```html
<!-- controls 显示音频控制面板   loop 循环播放   autoplay 自动播放 -->
<audio src="./media/music.mp3" controls loop autoplay></audio>
```



## 10-视频

```html
<video src="视频的 URL"></video>
```

常用属性

```html
<!-- 在浏览器中，想要自动播放，必须有 muted 属性   muted 静音播放-->
<video src="./media/vue.mp4" controls loop muted autoplay></video>
```





---







# 贰：列表、表格、表单

## 01-列表

列表分类：无序列表、有序列表、定义列表。



### 无序列表

作用：布局排列整齐的**不需要规定顺序**的区域。

标签：ul 嵌套 li，ul 是**无序列表**，li 是**列表条目**。

```html
<ul>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
  ……
</ul>
```



> 注意事项：

- ul 标签里面只能包裹 li 标签
- li 标签里面可以包裹任何内容



### 有序列表

作用：布局排列整齐的**需要规定顺序**的区域。

标签：ol 嵌套 li，ol 是有序列表，li 是列表条目。

```html
<ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
  ……
</ol>
```



> 注意事项：

- ol 标签里面只能包裹 li 标签
- li 标签里面可以包裹任何内容



### 定义列表

标签：dl 嵌套 dt 和 dd，dl 是定义列表，dt 是定义列表的标题，dd 是定义列表的描述 / 详情

```html
<dl>
  <dt>列表标题</dt>
  <dd>列表描述 / 详情</dd>
   ……
</dl>
```



> 注意事项：

- dl 里面只能包含dt 和 dd
- dt 和 dd 里面可以包含任何内容





## 02-表格

网页中的表格与 Excel 表格类似，用来展示数据。

### 基本使用

标签：table 嵌套 tr，tr 嵌套 td / th。

> table 表格
>
> tr  行
>
> th    表头单元格
>
> td   内容单元格



> 提示：在网页中，**表格默认没有边框线**，使用 **border 属性**可以为表格添加边框线。

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>语文</th>
    <th>数学</th>
    <th>总分</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>99</td>
    <td>100</td>
    <td>199</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>98</td>
    <td>100</td>
    <td>198</td>
  </tr>
  <tr>
    <td>总结</td>
    <td>全市第一</td>
    <td>全市第一</td>
    <td>全市第一</td>
  </tr>
</table>
```



### 表格结构标签

作用：用表格结构标签把内容划分区域，让表格结构更清晰，语义更清晰。

> thead 表格头部    tbody 表格主体   tfoot   表格底部

> 可忽略



### 合并单元格

作用：将多个单元格合并成一个单元格，以合并同类信息。

合并单元格的步骤：

1. 明确合并的目标
2. 保留**最左最上**的单元格，添加属性（取值是**数字**，表示需要**合并的单元格数量**）
    - **跨行合并**，保留最上单元格，添加属性 **rowspan**
    - **跨列合并**，保留最左单元格，添加属性 **colspan**
3. 删除其他单元格



> 注意：不能跨表格结构标签合并单元格（thead、tbody、tfoot）。





## 03-表单

作用：收集用户信息。

使用场景：

- 登录页面
- 注册页面
- 搜索区域



### input 标签

input 标签 type 属性值不同，则功能不同。

```html 
<input type="...."
```



| type属性值 | 说明                 |
| :--------- | -------------------- |
| text       | 文本框，输入单行文本 |
| password   | 密码框               |
| radio      | 单选框               |
| checkbox   | 复选框               |
|file        | 文件上传               |



### input 标签占位文本

占位文本：提示信息，文本框和密码框都可以使用。

````html
<input type="..." placeholder="提示信息">
````



### 单选框

常用属性

| 属性名  | 作用     |
| ------- | -------- |
| name    | 名称     |
| checked | 默认选中 |

```html
<input type="radio" name="gender" checked> 男
<input type="radio" name="gender"> 女
```





### 上传文件

默认情况下，文件上传表单控件只能上传一个文件，添加 multiple 属性可以实现文件多选功能。

```html
<input type="file" multiple>
```



### 下拉菜单

标签：select 嵌套 option，select 是下拉菜单整体，option是下拉菜单的每一项。

```html
<select>
  <option>北京</option>
  <option>上海</option>
  <option>广州</option>
  <option>深圳</option>
  <option selected>武汉</option>
</select>
```

> 默认显示第一项，**selected** 属性实现**默认选中**功能。



### 文本域

作用：多行输入文本的表单控件。

```html
<textarea>默认提示文字</textarea>
```



>注意点：
>
>- 实际开发中，使用 CSS 设置 文本域的尺寸
>- 实际开发中，一般禁用右下角的拖拽功能





### label 标签

作用：网页中，某个标签的说明文本。

用 label 标签绑定文字和表单控件的关系，增大表单控件的点击范围。

- 写法一


- label 标签只包裹内容，不包裹表单控件

- 设置 label 标签的 for 属性值 和表单控件的 id 属性值相同

  ​

```html
<input type="radio" id="man">
<label for="man">男</label>
```



- 写法二：使用 label 标签包裹文字和表单控件，不需要属性

```html
<label><input type="radio"> 女</label>
```

> 注意：支持 label 标签增大点击范围的表单控件：文本框、密码框、上传文件、单选框、多选框、下拉菜单、文本域等等。



### 按钮

```html
<button type="">按钮</button>
```

| type属性 | 说明                             |
| -------- | -------------------------------- |
| submit   | 提交按钮，将数据提交到后台       |
| reset    | 重置按钮，点击后将表单恢复到默认 |
| button   | 默认没有功能                     |

> 例

```html
<!-- form 表单区域 -->
<!-- action="" 发送数据的地址 -->
<form action="">
  用户名：<input type="text">
  <br><br>
  密码：<input type="password">
  <br><br>

  <!-- 如果省略 type 属性，功能是 提交 -->
  <button type="submit">提交</button>
  <button type="reset">重置</button>
  <button type="button">普通按钮</button>
</form>
```



## 04-语义化

### 无语义的布局标签

作用：布局网页（划分网页区域，摆放内容）

- div：独占一行
- span：不换行

```html
<div>div 标签，独占一行</div>
<span>span 标签，不换行</span>
```



### 有语义的布局标签

| 标签名  | 意义       |
| ------- | ---------- |
| header  | 网页头部   |
| nav     | 网页导航   |
| footer  | 网页底部   |
| aside   | 网页侧边栏 |
| section | 网页区块   |
| acticle | 网页文章   |



## 05-字符实体

| 显示效果 | 描述   | 实体名称 |
| -------- | ------ | -------- |
|          | 空格   | &nbsp    |
| <        | 小于号 | &it      |
| >        | 大于号 | &gt      |



## 06-综合案例-注册信息

```html
<h1>注册信息</h1>
<form action="">
  <!-- 表单控件 -->
  <!-- 个人信息 -->
  <h2>个人信息</h2>
  <label>姓名：</label><input type="text" placeholder="请输入真实姓名">
  <br><br>
  <label>密码：</label><input type="password" placeholder="请输入密码">
  <br><br>
  <label>确认密码：</label><input type="password" placeholder="请输入确认密码">
  <br><br>
  <label>性别：</label>
  <label><input type="radio" name="gender"> 男</label>
  <label><input type="radio" name="gender" checked> 女</label>
  <br><br>
  <label>居住城市：</label>
  <select>
    <option>北京</option>
    <option>上海</option>
    <option>广州</option>
    <option>深圳</option>
    <option>武汉</option>
  </select>
  <!-- 教育经历 -->
  <h2>教育经历</h2>
  <label>最高学历：</label>
  <select>
    <option>博士</option>
    <option>硕士</option>
    <option>本科</option>
    <option>大专</option>
  </select>
  <br><br>
  <label>学校名称：</label><input type="text">
  <br><br>
  <label>所学专业：</label><input type="text">
  <br><br>
  <label>在校时间：</label>
  <select>
    <option>2015</option>
    <option>2016</option>
    <option>2017</option>
    <option>2018</option>
  </select>
  --
  <select>
    <option>2019</option>
    <option>2020</option>
    <option>2021</option>
    <option>2022</option>
  </select>
  <!-- 工作经历 -->
  <h2>工作经历</h2>
  <label>公司名称：</label><input type="text">
  <br><br>
  <label>工作描述：</label>
  <br>
  <textarea></textarea>
  <br><br>
  <!-- 协议 和 按钮 -->
  <input type="checkbox"><label>已阅读并同意以下协议：</label>
  <ul>
    <li><a href="#">《用户服务协议》</a></li>
    <li><a href="#">《隐私政策》</a></li>
  </ul>
  <br><br>
  <button>免费注册</button>
  <button type="reset">重新填写</button>
</form>
```





***



# 叁-CSS基础

## 01-CSS

层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 **样式表** 语言，用来**描述 HTML 文档的呈现**（**美化内容**）。

书写位置：**title 标签下方添加 style 双标签，style 标签里面书写 CSS 代码**。

```html
<title>CSS 初体验</title>
<style>
  /* 选择器 { } */
  p {
    /* CSS 属性 */
    color: red;
  }
</style>

<p>体验 CSS</p>
```

> 提示：属性名和属性值成对出现 → 键值对。



## 02-CSS引入方式

- **内部**样式表
    - CSS 代码写在 style 标签里面
- **外部**样式表 (*)
    - CSS 代码写在单独的 CSS 文件中（**.css**）
    - 在 HTML 使用 link 标签引入

```html
<link rel="stylesheet" href="./my.css">
```

- **行内**样式：配合 JavaScript 使用
    - CSS 写在标签的 style 属性值里

```html
<div style="color: red; font-size:20px;">这是 div 标签</div>
```



## 03-选择器

作用：**查找标签**，设置样式。



### 标签选择器

标签选择器：使用**标签名**作为选择器 → 选中**同名标签设置相同的样式**。

例如：p, h1, div, a, img......

```html
<style>
  p {
    color: red;
  }
</style>
```

> 注意：标签选择器**无法差异化**同名标签的显示效果。



### 类选择器

作用：查找标签，**差异化**设置标签的显示效果。

步骤：

- 定义类选择器 → **.类名**
- 使用类选择器 → 标签添加 **class="类名"**

```html
<style>
  /* 定义类选择器 */
  .red {
    color: red;
  }
    .red size {
        
        
    }
</style>

<!-- 使用类选择器 -->
<div class="red">这是 div 标签</div>
<div class="red size">div 标签</div>
```

注意：

- 类名**自定义**，不要用纯数字或中文，尽量用英文命名
- 一个类选择器**可以供多个标签使用**
- **一个标签可以使用多个类名**，类名之间用**空格**隔开



### id选择器

作用：查找标签，差异化设置标签的显示效果。

场景：id 选择器一般**配合 JavaScript** 使用，很少用来设置 CSS 样式

步骤：

- 定义 id 选择器 → #id名
- 使用 id 选择器 → 标签添加 id= "id名"

```html
<style>
  /* 定义 id 选择器 */
  #red {
    color: red;
  }
</style>

<!-- 使用 id 选择器 -->
<div id="red">这是 div 标签</div>
```

> 规则：同一个 id 选择器在一个页面只能使用一次。



### 通配符选择器

作用：查找页面**所有**标签，设置相同样式。

通配符选择器： ***，不需要调用**，浏览器自动查找页面所有标签，设置相同的样式\

```html
* {
  color: red;
}
```



> 一般来制定页面中共有的样式



## 04-盒子尺寸和背景色

| 属性名           | 作用   |
| :--------------- | ------ |
| width            | 宽度   |
| height           | 高度   |
| background-color | 背景色 |



## 05-文字控制属性

### 字体大小

- 属性名：`font-size`
- 属性值：文字尺寸，PC 端网页最常用的单位 **px ,rem,rpx**



```css
p {
  font-size: 30px;
}
```

> 注意：谷歌浏览器默认字体是16px



字体样式

作用：清除文字默认的倾斜效果

属性名：`font-style`

属性值

- 正常（不倾斜）：**normal**
- 倾斜：**italic**



### 行高

作用：设置多行文本的间距

属性名：line-height

属性值

- 数字 + px
- 数字（当前标签font-size属性值的倍数）

```css

/* 当前标签字体大小为16px */
line-height: 2;
```



> 单行字体分,`上间距`，`下间距`，`文本高度`
>
> 行高的测量方法：从一行文字的最顶端（最底端）量到下一行文字的最顶端（最底端）。



#### 单行文字垂直居中

垂直居中技巧：**行高属性值等于盒子高度属性值**

注意：该技巧适用于**单行**文字垂直居中效果

```css
div {
  height: 100px;
  background-color: skyblue;

  /* 注意：只能是单行文字垂直居中 */
  line-height: 100px;
}
```

### 文字居中办法

1. 使用 `transform` 属性居中：
    - 通过设置 `transform: translate(-50%, -50%);` 并配合 `position: absolute;` 可以精确地控制元素的位置，实现居中。


1. 水平居中（行内元素）：
    - 使用 `text-align: center;` 可以使得行内元素（如 `span`, `a`, `em` 等）在块级容器中水平居中。
2. 水平居中（块级元素）：
    - 使用 `margin: 0 auto;` 可以让块级元素（如 `div`, `p` 等）在其父容器中水平居中。
3. 水平和垂直居中（行内元素）：
    - 可以使用 `text-align: center;` 和 `line-height` 与容器高度相同来实现。
4. 水平和垂直居中（块级元素）：
    - 使用 `display: flex;` 配合 `justify-content: center;` 和 `align-items: center;` 可以使得块级元素在其父容器中水平和垂直居中。
5. 使用绝对定位居中：
    - 通过设置元素的 `position: absolute;` 并调整 `left`, `right`, `top`, `bottom` 属性，可以实现绝对定位居中。



### 字体

属性名：`font-family`

属性值：字体名

```css
font-family: 楷体;
```



### font复合属性

使用场景：设置网页文字公共样式

复合属性：属性的简写方式，**一个属性对应多个值的写法**，各个属性值之间用**空格**隔开。

**font: 是否倾斜  是否加粗  字号/行高 字体（必须按顺序书写）**

```css
 div {
  font: italic 700 30px/2 楷体;
}
```



> 注意：字号和字体值必须书写，否则 font 属性不生效 。



### 文本缩进

属性名：`text-indent`

属性值：

- 数字 + px
- **数字 + em**（推荐：**1em = 当前标签的字号大小**）

```css
p {
  text-indent: 2em;
}
```



### 文本对齐方式

作用：控制内容水平对齐方式

属性名：`text-align`

| 属性名 | 效果         |
| ------ | ------------ |
| left   | 左对齐(默认) |
| center | 居中         |
| right  | 右对齐       |

> text-align本质是控制内容的对齐方式，属性要设置给内容的父级。



### 文本修饰线

属性名： `text-decoration`

| 属性值       | 效果   |
| ------------ | ------ |
| none         | 无     |
| underline    | 下划线 |
| line-through | 删除线 |
| overline     | 上划线 |

### 

***

# 肆-CSS进阶

## 01-复合选择器

定义：由两个或多个基础选择器，通过不同的方式组合而成。

作用：更准确、更高效的选择目标元素（标签）。



### 后代选择器

后代选择器：**选中某元素的后代元素**。

选择器写法：父选择器  子选择器 { CSS 属性}，父子选择器之间用**空格**隔开。

```html
<style>
  div span {
    color: red;
  }
</style>
<span> span 标签</span>
<div>
  <span>这是 div 的儿子 span</span >
</div>
```



### 子代选择器

子代选择器：选中某元素的子代元素（**最近的子级**）。

选择器写法：父选择器 > 子选择器 { CSS 属性}，父子选择器之间用 **>** 隔开。

```html
<style>
  div > span {
    color: red;
  }
</style>

<div>
  <span>这是 div 里面的 span</span>
  <p>
    <span>这是 div 里面的 p 里面的 span</span>
  </p>
</div>
```



### 并集选择器

并集选择器：选中**多组标签**设置**相同**的样式。

选择器写法：选择器1, 选择器2, …, 选择器N { CSS 属性}，选择器之间用 **,** 隔开。

```html
<style>
  div,
  p,
  span {
    color: red;
  }
</style>

<div> div 标签</div>
<p>p 标签</p>
<span>span 标签</span>
```



### 交集选择器

交集选择器：选中**同时满足多个条件**的元素。

选择器写法：选择器1选择器2 { CSS 属性}，选择器之间连写，没有任何符号。

```html
<style>
  p.box {
  color: red;
}
</style>
<p class="box">p 标签，使用了类选择器 box</p>   //变色

<p>p 标签</p>
<div class="box">div 标签，使用了类选择器 box</div>                    
```



### 伪类选择器

伪类选择器：伪类表示元素**状态**，选中元素的某个状态设置样式。

鼠标悬停状态：**选择器:hover { CSS 属性 }**

```html
<style>
  a:hover {
    color: red;
  }
  .box:hover {
    color: green;
  }
</style>

<a href="#">a 标签</a>
<div class="box">div 标签</div>
```



#### 超链接伪类

| 选择器   | 作用         |
| -------- | ------------ |
| :link    | 访问前       |
| :visited | 访问后       |
| :hover   | 鼠标悬停     |
| :active  | 点击时(激活) |

> 注意：如果要给超链接设置以上四个状态，需要按 LVHA 的顺序书写。



## 02-CSS特性

CSS特性：化简代码 / 定位问题，并解决问题

- 继承性
- 层叠性
- 优先级



#### 继承性

继承性：子级默认继承父级的**文字控制属性**。

### 层叠性

特点：

- 相同的属性会覆盖：**后面的 CSS 属性覆盖前面的 CSS 属性**
- 不同的属性会叠加：**不同的 CSS 属性都生效**

```html
<style>
  div {
    color: red;
    font-weight: 700;
  }
  div {
    color: green;
    font-size: 30px;
  }
</style>

<div>div 标签</div>
```



### 优先级

优先级：也叫权重，当一个标签**使用了多种选择器时**，基于不同种类的选择器的**匹配规则**。

```html
<style>
  div {
    color: red;
  }
  .box {
    color: green;
  }
</style>

<div class="box">div 标签</div>
```

​

#### 基础选择器

规则：选择器**优先级高的样式生效**。

公式：**通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important**



#### 复合选择器-叠加

叠加计算：如果是复合选择器，则需要**权重叠加**计算。

公式：（每一级之间不存在进位）

规则：

- 从左向右依次比较选个数，同一级个数多的优先级高，如果个数相同，则向后比较
- **!important 权重最高**
- 继承权重最低



## 03-Emmet 写法

Emmet写法：代码的**简写**方式，输入缩写 VS Code 会自动生成对应的代码。

- HTML标签

| 说明         | 标签结构                   | Emmet           |
| ------------ | -------------------------- | --------------- |
| 类选择器     | <div class="box"></div>    | `标签名`.`类名` |
| id选择器     | <div id="box"></div>       | `标签名`#`id名` |
| 同级标签     | <div ></div><p></p>        | `div+p`         |
| 父子级标签   | <div><p></p></div>         | `<div>p`        |
| 多个相同标签 | <span></span><span></span> | `span*3`        |
| 有内容的标签 | <div>内容</div>            | `div`{内容}     |



## 04-背景属性

###  背景图

网页中，使用背景图实现装饰性的图片效果。

- 属性名：**background-image**（bgi）

- 属性值：url(背景图 URL)

  ```html
  div {
    width: 400px;
    height: 400px;

    background-image: url(./images/1.png);
  }
  ```

  > 注意：背景图默认有**平铺（复制）效果**。

  ### 平铺方式

  属性名：**background-repeat**（bgr）

  | 属性值    | 效果           |
    | --------- | -------------- |
  | no-repeat | 不平铺         |
  | repeat    | 平铺(默认效果) |
  | repeat-x  | 水平方向       |
  | repeat-y  | 垂直方向       |

  ```css
  div {
    width: 400px;
    height: 400px;
    background-color: pink;
    background-image: url(./images/1.png);

    background-repeat: no-repeat;
  }
  ```

  ### 背景图位置

  属性名：**background-position**（bgp）

  属性值：水平方向位置 垂直方向位置

  center 居中   top 顶部   bottom 底部

  ###  

### 背景图缩放

作用：设置背景图大小

属性名：**background-size**（bgz）

常用属性值：

- 关键字
    - cover：等比例缩放背景图片以完全覆盖背景区，可能背景图片部分看不见
    - contain：等比例缩放背景图片以完全装入背景区，可能背景区部分空白
- 百分比：根据盒子尺寸计算图片大小
- 数字 + 单位（例如：px）

```html
div {
  width: 500px;
  height: 400px;
  background-color: pink;
  background-image: url(./images/1.png);
  background-repeat: no-repeat;
  
  background-size: cover;
  background-size: contain;
}
```

> 提示：工作中，**图片比例与盒子比例相同**，使用 cover 或 contain 缩放背景图效果相同。



### 背景图固定

作用：背景不会随着元素的内容滚动。

属性名：**background-attachment**（bga）

属性值：**fixed**

```css
body {
  background-image: url(./images/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```



### 背景复合属性

属性名：**background**（bg）

属性值：背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定（**空格隔开各个属性值，不区分顺序**）

```css
div {
  width: 400px;
  height: 400px;

  background: pink url(./images/1.png) no-repeat right center/cover;
}
```



## 05-显示模式

显示模式：标签（元素）的显示方式。



### 块级元素

特点：

- 独占一行
- 宽度默认是父级的100%
- 添加宽高属性生效

> div标签



### 行内元素

特点：

- 一行可以显示多个
- 设置宽高属性不生效
- 宽高尺寸由**内容**撑开

> span标签



***



# 伍-盒子模型

## 01-选择器

### 结构伪类选择器

### 基本使用

作用：根据元素的**结构关系**查找元素。

| 选择器        | 说明              |
| ------------- | ----------------- |
| E:first-child | 查找第一个E元素   |
| E:last-child  | 查找最后一个E元素 |
| E:nth-child   | 查找第N个E元素    |

补充说明:nth-child

| 功能            | 公式 |
| --------------- | ---- |
| 偶数标签        | 2n   |
| 奇数标签        | 2n+1 |
| 3的倍数的标签   | 3n   |
| 第5个以后的标签 | n+5  |
| 第5个以前的标签 | -n+5 |

> 注意公式中的n取值从0开始



### 伪元素选择器

作用：创建**虚拟元素**（伪元素），用来**摆放装饰性的内容**。

| 选择器    | 说明                            |
| --------- | ------------------------------- |
| E::before | 在E元素里面最前面添加一个伪元素 |
| E::after  | 在E元素里面最后面添加一个伪元素 |

```css
div::before {
  content: "before 伪元素";
}
div::after {
  content: "after 伪元素";
}
```

注意点：

- 必须设置 **content: ””属性**，用来 设置伪元素的内容，如果没有内容，则**引号留空**即可
- 伪元素默认是**行内**显示模式
- **权重和标签选择器相同**



## 02-盒子模型(*)

作用：布局网页，摆放盒子和内容。

### 盒子模型-组成

- 内容区域 – width & height
- 内边距 – padding（出现在内容与盒子边缘之间）
- 边框线 – border
- 外边距 – margin（出现在盒子外面）



> 例

```css
div {
  margin: 50px;
  border: 5px solid brown;
  padding: 20px;
  width: 200px;
  height: 200px;
  background-color: pink;
}
```



### 边框线

#### 四个方向

属性名：**border**（bd）

属性值：边框线粗细  线条样式  颜色（不区分顺序）

| 属性值 |      |
| ------ | ---- |
| soild  | 实线 |
| dashed | 虚线 |
| dotted | 点线 |

#### 单方向边框线

属性名：**border-方位名词**（bd+方位名词首字母，例如，bdl）

属性值：边框线粗细  线条样式  颜色（不区分顺序）

```css
div {
  border-top: 2px solid red;
  border-right: 3px dashed green;
  border-bottom: 4px dotted blue;
  border-left: 5px solid orange;

}
```





### 内边距

作用：设置 内容 与 盒子边缘 之间的距离。

- 属性名：padding / padding-方位名词

```css
div {
  /* 四个方向 内边距相同 */
  padding: 30px;
  /* 单独设置一个方向内边距 */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 80px;
 
}
```



> 注意：添加 padding 会撑大盒子。

- padding 多值写法

> 技巧：从上开始顺时针赋值，当前方向没有数值则与对面取值相同



### 外边距

作用：拉开两个盒子之间的距离

属性名：**margin**

与 padding 属性值写法、含义相同



### 清除默认样式

清除标签默认的样式，比如：默认的内外边距。

```css
/* 清除默认内外边距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 清除列表项目符号 */
li {
  list-style: none;
}
```



### 行内元素 – 内外边距问题

场景：行内元素添加 margin 和 padding，无法改变元素垂直位置

解决方法：给行内元素添加 **line-height** 可以改变垂直位置

```css
span {
  /* margin 和 padding 属性，无法改变垂直位置 */
  margin: 50px;
  padding: 20px;
  /* 行高可以改变垂直位置 */
  line-height: 100px;
}css

```



### 圆角

作用：设置元素的外边框为圆角。

属性名：**border-radius**

属性值：数字+px / 百分比   属性值是圆角半径

- 多值写法

> 注意：从左上角开始顺时针赋值，当前角没有数值则与对角取值相同。



- 正圆形状：给正方形盒子设置圆角属性值为 **宽高的一半 / 50%**

```css
img {
  width: 200px;
  height: 200px;
  
  border-radius: 100px;
  border-radius: 50%;
}
```



- 胶囊形状：给长方形盒子设置圆角属性值为 盒子高度的一半

```css              
div {
  width: 200px;
  height: 80px;
  background-color: orange;
  border-radius: 40px;
}
```



### position

position 属性指定了元素的定位类型。

position 属性的五个值：

static relative fixed absolute sticky



#### static 定位

HTML 元素的默认值，即没有定位，遵循正常的文档流对象。

静态定位的元素不会受到 top, bottom, left, right影响。

#### fixed 定位

元素的位置相对于**浏览器窗口是固定位置。**



#### relative 定位

相对定位元素的定位是相对其正常位置，relative定位的元素**未脱离**文档流**。**



#### absolute 定位

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于整个html页面调整，开启绝对定位的元素**脱离**文档流:





***





# 陆-Flex布局

## 01-标准流

标准流也叫文档流，指的是标签在页面中**默认的排布规则**，例如：块元素独占一行，行内元素可以一行显示多个。





## 02-浮动

### 基本使用

作用：让块元素水平排列。

属性名：**float**

属性值

- **left**：左对齐
- **right**：右对齐

```css
<style>
  /* 特点：顶对齐；具备行内块显示模式特点；浮动的盒子会脱标 */
  .one {
    width: 100px;
    height: 100px;
    background-color: brown;

    float: left;
  }

  .two {
    width: 200px;
    height: 200px;
    background-color: orange;

    /* float: left; */

    float: right;
  }
</style>

<div class="one">one</div>
<div class="two">two</div>
```



特点：

- 浮动后的盒子**顶对齐**
- 浮动后的盒子具备**行内块**特点
- 浮动后的盒子**脱标**，**不占用标准流的位置**(需避免)





## 03-Flex布局

#### flex布局

- Flexbox布局也叫Flex布局，弹性盒子布局。它的**目标**是提供一个更有效地布局、对齐方式，并且能够使父元素在子元素的大小未知或动态变化情况下仍然能够分配好子元素之间的间隙。**主要思想**是使父元素能够调整子元素的宽度、高度、排列方式，从而更好的适应可用的布局空间。设定为flex布局的元素能够放大子元素使之尽可能填充可用空间，也可以收缩子元素使之不溢出。
- Flex布局更适合小规模的布局，可以简便、完整、响应式的实现各种页面布局。但是，设为Flex布局以后，其子元素的`float`、`clear`和`vertical-align`属性将失效。
- Flex布局是一个完整的模块，它包括了一套完整的属性。其中采用 Flex 布局的元素，称为 Flex 容器，简称"**容器**"。它的所有子元素就是容器成员，称为 Flex 项目，简称"**项目**"。容器默认存在两个轴：**水平轴**（main axis）和**垂直轴**（cross axis），项目默认沿主轴排列（水平轴）：



![image-20231010141704221](https://s2.loli.net/2023/10/25/pCAVRGJdj9rqwBm.png)



### Flex组成

设置方式：给**父**元素设置 **display: flex**，子元素可以自动挤压或拉伸

组成部分：

- 弹性容器
- 弹性盒子
- 主轴：默认在**水平**方向
- 侧轴 / 交叉轴：默认在**垂直**方向



#### 父元素属性

使用flex布局，首先需要给父元素指定为flex布局，这样容器内的元素才能实现flex布局：

```css
/*任何一个容器都可以指定为flex布局*/
<div class="container"></div>

.container {
    display: flex | inline-flex;
}
/*这里有两种方式可以设置flex布局，使用display: flex;会生成一个块状的flex容器盒子，使用display: inline-flex;会生成一个行内的flex容器盒子。如果我们使用块状元素，比如div标签，就可以使用flex，如果使用行内元素，就可以使用inline-flex。多数情况下，我们会使用display: flex;。*/
```

父元素（容器）可以设置以下六个属性：

- **flex-direction**：主轴方向，它决定了容器内元素排列方向，它有四个属性值：

```css
.container {    flex-direction: row | row-reverse | column | column-reverse;}
```



`flex-direction: row`：默认值，沿水平主轴从左到右排列，起点在左沿

`flex-direction: row-reverse`：沿水平主轴从右到左排列，起点在右沿

`flex-direction: column`：沿垂直主轴从上到下排列，起点在上沿

`flex-direction: column-reverse`：沿垂直主轴从下到上排列，起点在下沿



![image-20231010141725406](https://s2.loli.net/2023/10/25/pGvy2j1kMBVJLqW.png)



- **flex-wrap**：容器内元素是否可以换行，它有三个属性值：

```css
.container {    flex-wrap: nowrap | wrap | wrap-reverse;}
```

`flex-wrap: nowrap`：默认值，不换行。当主轴的长度是固定并且空间不足时，项目尺寸会随之进行调整，而不会换行。

`flex-wrap: wrap`：换行，第一行在上面

`flex-wrap: wrap-reverse`：换行，第一行在下面



- **flex-flow：**

**`flex-flow`** 是 **`flex-direction`** 属性和**`flex-wrap`**属性的简写，默认为:**`flex-flow:row nowrap`**，用处不大，最好还是分开来写。

- **justify-content**：定义元素在主轴的对齐方式，它有五个属性值：

| 属性值        | 效果                                   |
| ------------- | -------------------------------------- |
| flex-start    | 默认值，弹性盒子从起点开始依次排列     |
| flex-end      | 从终点开始排列                         |
| center        | 沿主轴居中排列                         |
| space-between | 沿主轴排列  空白间距均分在弹性盒子之间 |
| space-around  | 沿主轴排列  空白间距均分在弹性盒子俩侧 |
| space-evenly  | 沿主轴排列  弹性盒子和容器之间间距相等 |

![image-20231010141755578](https://s2.loli.net/2023/10/25/PzZFemb19xE2shl.png)



- **align-items：**定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。元素在交叉轴上的对齐方式，它有五个属性值：

```css
.container {  align-items: flex-start | flex-end | center | baseline | stretch;}
```

![image-20231010141815053](https://s2.loli.net/2023/10/25/w8qJPSGHjeZiQIB.png)







***



# 柒-(未完)



## 01-平面转换

### 简介

作用：为元素添加动态效果，一般与过渡配合使用

概念：改变盒子在平面内的形态（位移、旋转、缩放、倾斜）



平面转换也叫 2D 转换，属性是 **transform**





### 平移

```css
transform: translate(X轴移动距离, Y轴移动距离);
```

- 取值
    - 像素单位数值
    - 百分比（参照**盒子自身尺寸**计算结果）
    - **正负**均可


- 技巧
    - translate() **只写一个值**，表示沿着 **X** 轴移动
    - 单独设置 X 或 Y 轴移动距离：translateX() 或 translateY()

### 定位居中

- 方法一：margin

  ```css
  .a{
      position:absolute;
      left:50%;
      right:50%;
      
      /* margin */
      margin-top：-100px；
      
      width：200px；
      height：100px；
      
  }
  ```

  ​


- 方法二：平移 → 百分比参照盒子自身尺寸计算结果

```css
.a{
    position:absolute;
    left:50%;
    right:50%;
    
    transform:translate(-50%,-50%)
    
}
```





### 旋转

```css
transform: rotate(旋转角度);
```

- 取值：角度单位是 **deg**
- 技巧
    - 取值正负均可
    - 取值为正，顺时针旋转
    - 取值为负，逆时针旋转






# 捌-移动适配

## 01-移动 Web 基础

### 谷歌模拟器

模拟移动设备，方便查看页面效果



### 屏幕分辨率

分类：

- 物理分辨率：硬件分辨率（出厂设置）
- 逻辑分辨率：软件 / 驱动设置

结论：**制作网页参考 逻辑分辨率**

| 手机型号          | 物理分辨率 | 逻辑分辨率 | 比例关系 |
| ----------------- | ---------- | ---------- | -------- |
| iPhone6/7/8(标准) | 750*1334   | 375*667    | 2:1      |
| iPhone6/7/8 Plus  | 1080*1920  | 414*736    | 2.6:1    |



### 视口

作用：显示 HTML 网页的区域，用来约束 HTML 的尺寸

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!– 视口标签 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Document</title>
</head>
<body>
  
</body>
</html>
```



- width=device-width：视口宽度 = 设备宽度
- initial-scale=1.0：缩放1倍（不缩放）



### 二倍图

概念：设计稿里面每个元素的尺寸的倍数

作用：防止图片在高分辨率屏幕下模糊失真



### 适配方案

- 宽度适配：宽度自适应
    - 百分比布局
    - Flex 布局
- 等比适配：宽高等比缩放
    - rem
    - vw



## 02-rem

### 简介

- rem单位，是相对单位
- rem单位是相对于HTML标签的字号计算结果
- 1rem = 1HTML字号大小



### 媒体查询

媒体查询能够检测视口的宽度，然后编写差异化的 CSS 样式

当某个条件成立, 执行对应的CSS样式

> 格式：

```css
@media (媒体特性) {
  选择器 {
    css属性
  }
}
```



> 例子

```css
@media (width:320px) {
  html {
    background-color: green;
  }
}
```





### rem 布局

目前rem布局方案中，将网页等分成10份， HTML标签的字号为视口宽度的 1/10。



### flexible.js

flexible.js 是手淘开发出的一个用来适配移动端的 js 库。

核心原理就是根据不同的视口宽度给网页中 html 根节点设置不同的 font-size。

```html
<body>
  ......
  <script src="./js/flexible.js"></script>
</body>
```

### rem 移动适配

rem单位尺寸

1. 确定基准根字号

- 查看设计稿宽度 → 确定参考设备宽度(视口宽度) → 确定基准根字号（1/10视口宽度）

1. rem单位的尺寸

- **rem单位的尺寸 = px单位数值 / 基准根字号**





## 03-less

Less是一个CSS预处理器, Less文件后缀是.less。扩充了 CSS 语言, 使 CSS 具备一定的逻辑性、计算能力

注意：浏览器不识别 Less 代码，目前阶段，网页要引入对应的 CSS 文件

VS Code 插件：Easy LESS，保存 less文件后自动生成对应的 CSS 文件



### 运算

- 加、减、乘直接书写计算表达式
- 除法需要添加 小括号 或 .
- 表达式存在多个单位以第一个单位为准



```less
.box {
    width: 100+ 50 px;
    height: (100 / 4px);
}
```





### 嵌套

作用：快速生成后代选择器

```less
.father{
    color：red；
    .son{
      color:green;   
    }
}
```



提示：用 `&` 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用



```less 
.father{
    color：red；
   &:hover{
     color:green;   
    }
}

/*或者是*/

.father{
    color：red；
   .father:hover{
       color:green;    
    }
}
```



### 变量

概念：容器，存储数据

作用：存储数据，方便使用和修改

语法：

- 定义变量：@变量名: 数据;
- 使用变量：CSS属性：@变量名;

```less
// 定义变量
@myColor: pink;
// 使用变量
.box {
  color: @myColor;
}
a {
  color: @myColor;
}
```

### 导入

作用：导入 less 公共样式文件

语法：导入: @import “文件路径”;

提示：如果是 less 文件可以省略后缀

```less
@import './base.less';
@import './common';
```

### 导出

写法：在 less 文件的第一行添加 // out: 存储URL

提示：文件夹名称后面添加 /

```less
// out: ./index.css
// out: ./css/
```

### 





## 04-vw适配方案

### vw和vh基本使用

vw和vh是相对单位，相对视口尺寸计算结果

- vw：viewport width（1vw = 1/100视口宽度 ）
- vh：lviewport height ( 1vh = 1/100视口高度 )

### vw布局

vw单位的尺寸 = px 单位数值 / ( 1/100 视口宽度 )

### vh问题

vh是1/100视口高度，全面屏视口高度尺寸大，如果混用可能会导致盒子变形





## 05-媒体查询

### 基本写法

```css
@media(媒体特性){
    
    选择器{
        
        样式
    }
}
```



- max-width：最大宽度（小于等于）
- min-width：最小宽度（大于等于）

### 书写顺序

- min-width（从小到大）
- max-width（从大到小）



### 案例-左侧隐藏

需求：网页宽度小于等于768px则隐藏左侧区域

- HTML 结构

```css
<div class="box">
  <div class="left">left</div>
  <div class="main">
    响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果响应式网页效果
  </div>
</div>
```

- CSS 样式

```css
.box {
  display: flex;
}

.left {
  width: 300px;
  height: 500px;
  background-color: pink;
}

.main {
  flex: 1;
  height: 500px;
  background-color: skyblue;
}

@media (max-width: 768px) {
  .left {
    display: none;
  }
}
```

### 媒体查询-完整写法



```css
@media 关键词 媒体类型 and (媒体特性)  {css代码}
```



#### 关键词 / 逻辑操作符

- and
- only
- not

#### 媒体类型

媒体类型用来区分设备类型

- screen：屏幕设备
- 打印预览：print
- 阅读器：speech
- 不区分类型：all

#### 媒体特性

- 视口宽高：width / height
- 视口最大宽高：max-width ；max-height
- 视口最小宽高：min-width；min-height
- 屏幕方向：orientation
    - protrait：竖屏
    - landscape：横屏








# 玖-grid布局和三栏式布局

## grid布局

`Grid` 布局是将容器划分成了“行”和“列”，产生了一个个的网格，我们可以将网格元素放在与这些行和列相关的位置上

> 例

<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/26/173895918bfd94e9~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp#?w=1240&amp;h=661&amp;s=28868&amp;e=png&amp;b=ffffff" alt="" loading="lazy" class="medium-zoom-image">

```html
<div class="wrapper">
  <div class="one item">One</div>
  <div class="two item">Two</div>
  <div class="three item">Three</div>
  <div class="four item">Four</div>
  <div class="five item">Five</div>
  <div class="six item">Six</div>
</div>

```



```css
.wrapper {
  margin: 60px;
  /* 声明一个容器 */
  display: grid;
  /*  声明列的宽度  */
  grid-template-columns: repeat(3, 200px);
  /*  声明行间距和列间距  */
  grid-gap: 20px;
  /*  声明行的高度  */
  grid-template-rows: 100px 200px;
}
.one {
  background: #19CAAD;
}
.two { 
  background: #8CC7B5;
}
.three {
  background: #D1BA74;
}
.four {
  background: #BEE7E9;
}
.five {
  background: #E6CEAC;
}
.six {
  background: #ECAD9E;
}
.item {
  text-align: center;
  font-size: 200%;
  color: #fff;
}

```



容器和项目：我们通过在元素上声明 `display：grid` 或 `display：inline-grid` 来创建一个网格容器。一旦我们这样做，这个元素的所有直系子元素将成为网格项目。比如上面 `.wrapper` 所在的元素为一个网格容器，其直系子元素将成为网格项目。

网格轨道：`grid-template-columns` 和 `grid-template-rows` 属性来定义网格中的行和列。容器内部的水平区域称为行，垂直区域称为列。上图中 `One`、`Two`、`Three` 组成了一行，`One`、`Four` 则是一列



### 1.声明容器

#### 1.块级容器

- **display: grid**;

```html
html

 代码解读
复制代码<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
     .box {
        width: 100px;
        height: 100px;
        background-color: red;
        margin: 10px;
        display: grid;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #d2d0d0;
     }
     </style>
  </head>
  <body>
    <span>xxxxxx</span>
    <span class="box"></div>
  </body>
</html>
```





#### 2.行级容器

- **display: inline-grid;**

```html

 代码解读
复制代码<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        body{
        margin: 50px;
        }
     .box {
        width: 100px;
        height: 100px;
        background-color: red;
        margin: 10px;
        display: inline-grid;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #d2d0d0;
     }
     </style>
  </head>
  <body>
    <span>xxxxxx</span>
    <span class="box"></div>
  </body>
</html>
```



### 2.划分行列

- 网格有点类似表格，也 `行` 和 `列`。使用 `grid-template-columns` 规则可划分**列数**，使用 `grid-template-rows` 划分**行数**。



#### 1.固定宽度

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/0ff07fd1279449d49a2acb44706761b3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=CqmlA96Ppnw%2F7FGgWK%2BmYTYs0QU%3D" loading="lazy" class="medium-zoom-image">

- 我们划分了`3列` `3行` 元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<style>
      .box {
        margin: 50px auto;
        display: grid;
        grid-template-columns: 100px 100px 100px;  
        grid-template-rows: 100px 100px 100px;   
        width: 300px;
        height: 200px;
        border: 5px solid #3333;
      }
      .box div {
        padding: 20px;
        background-clip: content-box;
        background-color:blueviolet;
        border: 1px solid #d2d0d0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>

</body>



</html>
```

#### 2.百分比

- 可以使用使用百分比自动适就容器。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<style>
      .box {
        margin: 50px auto;
       display: grid;
       grid-template-columns: 33.33% 33.33% 33.33%;  // 三列
       grid-template-rows: 50% 50%;  // 两行
        width: 300px;
        height: 200px;
        border: 5px solid #3333;
      }
      .box div {
        padding: 20px;
        background-clip: content-box;
        background-color:blueviolet;
        border: 1px solid #d2d0d0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>

</body>



</html>

```





#### 3.重复设置

- 使用 `repeat` 统一设置值，第一个参数为重复数量，第二个参数是重复值

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9380962f55394f52b916e57b40ebe506~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=G4zcnELJrZF%2FJvDPqU0LQ5icsWQ%3D" >

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        margin: 50px auto;
        display: grid;
        grid-template-rows: repeat(2, 50%);
        grid-template-columns: repeat(2, 50%);
        width: 300px;
        height: 200px;
        border: 5px solid #3333;
      }
      .box div {
        padding: 20px;
        background-clip: content-box;
        background-color: #f509f1;

        border: 1px solid #d2d0d0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </body>
</html>
```



- 可以设置多个值来定义重复，下面定义四列` 100px 50px`重复排列。

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/bade03d6d6ce49439c7b2c8943ab9474~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=ukdmWmTFz%2BWV1FQNpssSENKLHbM%3D" >

```
css

 代码解读
复制代码 display: grid;
 grid-template-rows: repeat(2, 50%);
 grid-template-columns: repeat(2, 100px 50px);
```

**注意**：`repeat` 函数第一个参数是重复几次 后面的值**个数 **是他循环重复次数，如上面

`grid-template-columns: repeat(2, 100px 50px);` 就展示了4列 公式：`重复次数 * 参数的个数=2*2 `





#### 4.自动填充

- 自动填充是根据容器尺寸，自动设置元素尺寸。

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/38390b751d7e404b9b29292799c5091f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=TBAcZwm6okfDSjN2aRz6byxwfo4%3D" >

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        margin: 50px auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, 100px);
        grid-template-rows: repeat(auto-fit, 100px);

        width: 300px;
        height: 200px;
        border: 5px solid #3333;
      }
      .box div {
        padding: 20px;
        background-clip: content-box;
        background-color: blueviolet;
        border: 1px solid #d2d0d0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
</html>

```



#### 5.比例划分

##### 1. 单位组合

- 使用 `fr` 单位设置元素在空间中所占的比例，下面按`1份-2份` 分成两组共四列。

  <img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/5c62406351a743a88eccbd98f59c687d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=tozgf0SQDdlqHomJgORjsjb7ZYk%3D" >

```css
width: 300px;
height: 200px;
display: grid;
grid-template-rows: 1fr 2fr;
grid-template-columns: 100px 1fr 2fr;

```





#### 6.组合定义

`grid-tempalte` 是 `grid-template-rows`、`grid-template-columns`、`grid-template-areas` 的三个属性的简写。

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/4484cb4d2ad84a7eb087385706dc401e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=1Lw0Ka9r%2B9vEiKWQjbAz81RNh7o%3D" >

下面使用`grid-template`实现二行三列的布局

```html

<style>
      .box {
        margin: 50px auto;
        width: 300px;
        height: 200px;
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(3, 1fr);
        border: 1px solid red;
      }
      .box div {
        padding: 20px;
        background-clip: content-box;

        color: #fff;
        border: 1px solid red;
      }
    </style>
 <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
```



<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/42711e5be0954a03a98d018537cd5d32~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=%2FuiKZ262rmeTJWnNbpFlUkv3HMo%3D" >

下面是使用 `grid-template` 同时声明 `grid-template-rows、grid-template-columns`。

```html

<style>
      .box {
        margin: 50px auto;
        width: 300px;
        height: 200px;
        display: grid;
        grid-template: 50px 100px 50px / 150px 150px;
        border: 5px solid #d0d0d0;
      }
      .box div {
        background-clip: content-box;
        background-color: blueviolet;
        color: #fff;
        font-size: 20px;
        border: 1px solid #d0d0d0;
      }
    </style>
     <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
```





- 下面是使用`grid-template` 定义 `grid-template-areas` ，有关`grid-template-areas`的使用方法会在下面介绍。

  <img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1a03edefa7b94e1ab8a5c222ae210a77~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=uHbcVroX90PAOje%2FmNYrkYbotqM%3D" >

```html
<style>
      .box {
        margin: 50px auto;
        width: 300px;
        display: grid;
        /* 点代表占位符 一个甚至多个  */
        grid-template:
          'header header .' 100px
          '. main main' 200px
          'footer . .' 300px;
        border: 5px solid #d0d0d0;
      }
      .box div {
        background-clip: content-box;
        background-color: blueviolet;
        color: #fff;
        font-size: 20px;
        border: 1px solid #d0d0d0;
      }
      div:nth-child(1) {
        grid-area: header;
      }
      div:nth-child(2) {
        grid-area: main;
      }
      div:nth-child(3) {
        grid-area: footer;
      }
    </style>
      <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>

```





### 3.间距定义

#### 1.行间距

使用 `row-gap` 设置行间距。

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/c3a1902df0944324849f46985b7bfd85~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=ZHaXpgGHiJd77evXJ%2B0MoUmgdsc%3D" >

```cs
width: 300px;
height: 200px;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(3, 1fr);
row-gap: 30px;
```

#### 2.列间距

使用 `column-gap` 设置行间距。

![img](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/6e12effb89ec43fd972c8e6ea552cf80~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&x-expires=1727233827&x-signature=JBNLyDfhyxDi9gI72DmN7zvYyKc%3D)

#### 3.组合定义

- 使用 `gap` 规则可以一次定义行、列间距，如果间距一样可以只设置一个值。

    - **设置行列间距为 20px 与 10px**

  ​

```css
width: 300px;
height: 200px;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(3, 1fr);
gap: 20px 10px;

```

**统一设置行列间距为 20px**

```css

gap: 20px;
```









### 4.元素定位

#### 1.元素定位属性

| 样式属性          | 说明         |
| ----------------- | ------------ |
| grid-row-start    | 行开始网格线 |
| grid-row-end      | 行结束网格线 |
| grid-column-start | 列开始网格线 |
| grid-column-end   | 列结束网格线 |

上面几个样式属性可以使用以下值

| 属性值        | 说明                               |
| ------------- | ---------------------------------- |
| Line          | 网格络                             |
| span 数值     | 网格包含的网格数量                 |
| span 区域名称 | 网格包含到指定的区域名称           |
| auto          | 自动设置，默认为一个网格宽度和高度 |

#### 2.根据网格线

- 通过设置具体的第几条网格线来设置区域位置，设置的数值可以是正数和负数
- <img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/7c0e4dead1b54ea089f0515bb5767119~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=Pcsca1h%2FOnzp9B64YCknF%2BemwM4%3D" loading="lazy" class="medium-zoom-image">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .header {
        margin: 50px;
        display: grid;
        width: 300px;
        height: 300px;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        border: 5px solid #cfcfce;
      }
      .header .div1 {
        background-color: blueviolet;
        grid-column-start: 2; // 相当于图上所画的 cloumn 2
        grid-column-end: 3;   // 相当于图上所画的 cloumn 3
        grid-row-start: 2;  // 相当于图上所画的 row 2
        grid-row-end: 3;  // 相当于图上所画的 row 3
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="div1">1</div>
    </div>
  </body>
</html>


```





#### 3.根据偏移量

使用 `span` 可以设置包含网格的数量或包含到的区域名称。

| 示例                | 说明          |
| ------------------- | ------------- |
| grid-row-end:2      | 向下包含 2 行 |
| grid-row-start:2    | 向上包含 2 行 |
| grid-column-end:2   | 向右包含 2 行 |
| grid-column-start:2 | 向左包含 2 行 |

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9dabdcaf6c3b4811948a3ce1892395b6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=NT9iYmhZLTlP2Ue8Y8raYpOcTc8%3D" >



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .header {
        margin: 50px;
        display: grid;
        width: 300px;
        height: 300px;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        border: 5px solid #cfcfce;
      }
      .header .div1 {
        background-color: blueviolet;
        grid-column-start: 1;
        grid-column-end: span 2;
        grid-row-start: 1;
        grid-row-end: span 2;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="div1">1</div>
    </div>
  </body>
</html>


```



#### 5.简写模式

可以使用 `grid-row` 设置行开始网格线，使用 `grid-column` 设置结束网格线。

上例中的**垂直水平居中对齐元素**，可以使用以下简写的方式声明（推荐）。

```css
grid-column: 2/3;
grid-row: 2/3;
```

#### 6.更加简写的模式

`grid-area`更加简洁是同时对 `grid-row` 与 `grid-column` 属性的组合声明。

语法结构如下：

```sql
grid-area:grid-row-start/grid-column-start/grid-row-end/grid-column-end。
```

上例中的**垂直水平居中对齐元素**，可以使用以下简写的方式声明

```css
grid-area:2/2/3/3
```



### 5.网格命名

网格线可以使用命名与编号找到，方便控制指定网格，或将内容添加到指定网格中。

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9d17df88bd65445087b5fca04c2df53c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=4TK3gpwwYxrRFVXY3lGs51sGtuc%3D" >

#### 1.独立命名

可以为每个网格独立命名来进行调用。我们让元素跑到中间去我创建一个3行3列的网格

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/7cce7fdb6c024350add5be675b0d1eb2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=g8YlMg%2B5XvQ9kLKtvezP7Kw1f8w%3D" >

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .header {
        margin: 50px;
        display: grid;
        width: 300px;
        height: 300px;
        grid-template-columns: [c1-start] 100px [c1-end c2-start] 100px [c2-end c3-start]       100px [c3-end];
        grid-template-rows: [r1-start] 100px [r1-end r2-start] 100px [r2-end r3-start]         100px [r3-end];
        border: 5px solid #cfcfce;
      }
      .header .div1 {
        background-color: blueviolet;
        grid-row-start: r2-start;
        grid-column-start: c1-end;
        grid-row-end: r2-end;
        grid-column-end: c3-start;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="div1">1</div>
    </div>
  </body>
</html>


```





#### 2.自动命名

上面那种方式过于麻烦了，创建一个列或者行就要给名字，我们用重复函数repeat来实现

````css
grid-template-columns: repeat(3, [c-start] 100px [c-end]);
        grid-template-rows: repeat(3, [r-start] 100px [r-end]);
````



### 6.网格流动

在容器中设置`grid-auto-flow` 属性可以改变单元格排列方式。

| 选项   | 说明                                   |
| ------ | -------------------------------------- |
| column | 按列排序                               |
| row    | 按行排列                               |
| dense  | 元素使用前面空余栅格（下面有示例说明） |

#### 1.基本使用

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/83d11f3fe5ae417a9d6dfe5bc646af78~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=UXlY1Pf8zutpJzr878jK0adfqIw%3D">

```html
<style>
  article {
      width: 400px;
      height: 400px;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      border: solid 5px silver;
      grid-auto-flow: column;
  }

  div {
      background: blueviolet;
      background-clip: content-box;
      padding: 10px;
      font-size: 35px;
      color: white;
  }
</style>


<article>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</article>

```







#### 2.强制填充

当我们布局的时候有些空隙这个时候

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9c5aa4de34bd4651ac4b8c08a6e8e048~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=jR%2B9YXE0q2y0JXGmpM7SRO3WDp8%3D" >

```html
<style>
  article {
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(2, 100px);
    border: solid 5px silver;
  }

  div {
    background: blueviolet;
    background-clip: content-box;
    padding: 10px;
    font-size: 35px;
    color: white;
  }
  div:first-child {
    grid-column: 2/4;
  }
  div:nth-child(2) {
    grid-column: 1/3;
  }
</style>
...

<article>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</article>
```

当元素在栅格中放不下时，将会发生换行产生留白，使用`grid-auto-flow: row dense;` 可以执行填充空白区域操作。



### 7.对齐管理

可以通过属性方便的定义栅格或元素的对齐方式

| 选项            | 说明                                                     | 对象             |
| --------------- | -------------------------------------------------------- | ---------------- |
| justify-content | 所有栅格在容器中的水平对齐方式，容器有额外空间时         | 栅格容器         |
| align-content   | 所有栅格在容器中的垂直对齐方式，容器有额外空间时         | 栅格容器         |
| align-items     | 栅格内所有元素的垂直排列方式                             | 栅格容器         |
| justify-items   | 栅格内所有元素的横向排列方式栅格内所有元素的横向排列方式 | 栅格容器栅格容器 |
| align-self      | 元素在栅格中垂直对齐方式                                 | 栅格元素         |
| justify-self    | 元素在栅格中水平对齐方式                                 | 栅格元素         |

#### 1.网格对齐

justify-content 与 align-content 用于控制栅格的对齐方式，比如在栅格的尺寸小于容器的里面时，控制栅格的布局方式。

justify-content 属性的值如下

| 值            | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| start         | 容器左边                                                     |
| end           | 容器右边                                                     |
| center        | 容器中间                                                     |
| stretch       | 撑满容器                                                     |
| space-between | 第一个栅格靠左边，最后一个栅格靠右边，余下元素平均分配空间   |
| space-around  | 每个元素两侧的间隔相等。所以，栅格之间的间隔比栅格与容器边距的间隔大一倍 |
| space-evenly  | 栅格间距离完全平均分配                                       |

align-content 属性的值如下

| 值            | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| start         | 容器顶边                                                     |
| end           | 容器底边                                                     |
| center        | 容器垂直中间                                                 |
| stretch       | 撑满容器                                                     |
| space-between | 第一个栅格靠左边，最后一个栅格靠右边，余下元素平均分配空间   |
| space-around  | 每个元素两侧的间隔相等。所以，栅格之间的间隔比栅格与容器边距的间隔大一倍 |
| space-evenly  | 栅格间距离完全平均分配                                       |

#### 2.元素对齐

justify-items 与 align-items 用于控制所有栅格内元素的对齐方式

- justify-items 用于控制元素的水平对齐方式，可用的属性值如下

| 值      | 说明               |
| ------- | ------------------ |
| start   | 元素对齐栅格的左边 |
| end     | 元素对齐栅格的右边 |
| center  | 元素对齐栅格的中间 |
| stretch | 水平撑满栅格       |

- align-items 用于控制元素的垂直对齐方式，可用的属性值如下

| 值      | 说明                   |
| ------- | ---------------------- |
| start   | 元素对齐栅格的顶边     |
| end     | 元素对齐栅格的底边     |
| center  | 元素对齐栅格的垂直中间 |
| stretch | 垂直撑满栅格           |

下面是将元素在所在栅格中水平、垂直居中的示例

<img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/52622752faab466b9f12467ea7283a58~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6I-g6I-cNzA3:q75.awebp?rk3s=f64ab15b&amp;x-expires=1727233827&amp;x-signature=FSC939AzKZhU0rX7KVMdXHg0efI%3D" >



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      article {
        display: grid;
        border: 5px solid #d2d0d0;
        height: 100px;
        width: 400px;
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: 100px;
        justify-items: flex-start;
        align-items: center;
      }
      article div {
        border: 1px solid #d2d0d0;
        padding: 10px;
        background-color: blueviolet;
        box-sizing: border-box;
        width: 50px;
        height: 50px;
      }
    
    </style>
  </head>
  <body>
    <article>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </article>
  </body>
</html>


```





