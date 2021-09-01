1 - сделать рефакторинг src/redux/actionTypes.js и src/redux/actionCreators.js, чтобы можно было обращаться к экшнам через actionTypes.age.INCREMENT, actionTypes.counter.DECREMENT, actionTypes.counter.DECREMENT1, actionTypes.counter.INCREMENT, actionTypes.counter.MULTIPLY, actionTypes.todos.ADD и actionTypes.user.UPDATE

2 - вместо src/redux/reducers.js реализовать:

src/redux/reducers/counterReducers.js (actionTypes.counter.INCREMENT, actionTypes.counter.DECREMENT, actionTypes.counter.MULTIPLY)
src/redux/reducers/ageReducer.js (actionTypes.age.INCREMENT)
src/redux/reducers/todoReducer.js (actionTypes.todos.ADD)
src/redux/reducers/userReducer.js (actionTypes.user.UPDATE)
чтобы итоговый стэйт заполнялся в следующем формате:

{
  counter: '7',
  age: 15,
  todos: [
    {
      id: '1'
    },
    {
      id: '1'
    },
    {
      id: '1'
    },
    {
      id: '3'
    },
    {
      id: '4'
    },
    {
      id: '7'
    }
  ],
  userInfo: {
    country: 'France'
  }
}
3 - реализовать rootReducer.js используя combineReducers:

const rootReducder = combineReducers({
    counter: counterReducer,
    age: ageReducer,
    todos: todosReducer,
    userInfo: userReducer
});
4 - в src/redux/store.js заменить counterReducer на rootReducder

5 - в src/components/Counter/Counter.jsx наряду с уже существующими кнопками добавить кнопки:

Add todo, которая диспатчит addTodo({ id: counter }), что добавляет новую запись в массив todos в стэйте
Update user, которая диспатчит udpateUser({ country: "France" }), что устанавливает в стэйте свойству userInfo значение { country: 'France' }
остальные кнопки в Counter.jsx и CounterButtons.jsx изменяют значение свойства counter в строковом форма, а age - в числовом

6 - сделать рефакторинг структуры counter, чтобы все функциональные и классовые компоненты лежали в соответствующих папках и импортировались в app.js следующим образом:

import Counter from "../Counter/function/Counter/Counter";
import CounterViaContext from "../Counter/function/CounterViaContext/CounterViaContext";
import CounterViaUseState from "../Counter/function/CounterViaUseState/CounterViaUseState";
import CounterViaUseStateAndClasses from "../Counter/class/CounterViaUseStateAndClasses/CounterViaUseStateAndClasses";
import CounterViaContextAndClassesWithStore from "../Counter/class/CounterViaContextAndClassesWithStore/CounterViaContextAndClassesWithStore";
7* - на основе функциональных компонентов из src\components\Counter\function\Counter создать классовые компоненты в src\components\Counter\class\Counter

1 - (Done)
2 - (Done)
3 - (Done)
4 - (Done)
5 - (Done)
6 - (Done)
7 - (Done)
8 - Hosting URL: https://andrejfirstproject.web.app
9* - Реализовать валидацию полей таким образом, что если пользователь не ввел никакие значения в поля name и/или feedback при этом нажал на Add, пустые поля подсвечивались красным бордером

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
