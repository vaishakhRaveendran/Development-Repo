const reactContenRoot = document.getElementById('root');
const myFirstElement=React.createElement('li',null,'item1');
//Name of element(li,div,button etc),PROP,content
const mySecondElement=React.createElement('li',null,
 [React.createElement('div',null,"hello papa"),React.createElement('div',null,"hello mama")]);
ReactDOM.render(mySecondElement,reactContenRoot);
// ReactDOM.render('Helo',reactContenRoot);
//reactDom will put a helo inside the reactContenRoot.