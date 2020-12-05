>阮一峰老师两篇文章的学习笔记
https://www.ruanyifeng.com/blog/2019/09/react-hooks.html
http://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html

React 有两套 API
- 类（class）
- 基于函数的钩子（hooks）

同一套组件，可以用 class 来写，也可以用 hooks 来写

这两种方法比较，hooks 方式更简洁一点，官方也推荐使用 hooks

### 类和函数的差异

类是数据和逻辑的封装，类里面包含了组件的状态和操作方法

而对于函数来说，它应该只做一件事，也就是返回一个处理好的值，比如说 input 一个 x，它做的事情应该只是 output 一个 f(x)

### 什么是钩子（hook）

在一些情况下，函数需要包含一些和数据无关的操作，我们称这些无关的操作为**副效应（side effect）**

而钩子（hook），就是 React 函数组件的负效应解决方案，用来为函数组件引入副效应

所以，函数的主体只用来返回组件的 HTML 代码，所有其他操作（副效应）都通过钩子引入

### 一些 hooks

#### `useState` 状态钩子

`useState` 用于为函数组件引入状态（state）。因为纯函数不能有状态，所以把状态放在钩子里面

>例子在 state 文件夹中

用户点击按钮，会导致按钮文字的改变，文字的状态取决于用户是否点击，这就是状态

用法：
- `useState()` 这个函数接受状态的初始值
- `useState()` 这个函数返回一个数组
- 数组的第一个成员是一个变量（例子中的 `buttonText`）
- 数组的第二个成员是一个函数，用来更新状态（例子中的 `setButtonText`） 

#### `useContext` 共享状态钩子

`useState` 用来在组件之间共享状态

>例子在 context 文件夹中

步骤：
- 在外部建立一个 Context，例：`AppContext = React.createContext({});`
- 用 `AppContext.Provider` 设置共享数据，把共享数据的组件包裹起来
- 子组件里面用 `useContext(AppContext)` 可以拿到共享的数据

#### `useReducer` action 钩子

reducer 是用来计算状态

>例子在 reducer 文件夹中

用法：
- `useState()` 接受 Reducer 函数，和状态的初始值作为参数
- 返回一个数组，数组的第一个成员是状态的当前值
- 第二个成员是发送 action 的 `dispatch` 函数

#### `useEffect()` 通用副效应钩子

`useEffect()` 是通用副效应钩子，找不到对应的钩子的时候，可以用它

常见的用途：
- 获取数据
- 事件监听或订阅
- 改变 DOM
- 输出日志

>例子在 effect 文件夹中

用法：
- `useEffect()` 第一个参数是执行副效应的函数，第二个参数是副效应函数的依赖项，只有该变量发生变化的时候，副效应函数才执行
- 如果第二个参数是一个空数组，表明副效应参数没有任何依赖项，所以，副效应函数这时只会在组件加载进 DOM 后执行一次
