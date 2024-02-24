const reactContenRoot = document.getElementById('root');
const interpolation="javasript inside html";
//react component.
const app=()=>{
 return(
   <ul>
   <li>item1<\li>
   <li>item2<\li>
   <li>{interpolation}<\li>
   <\ul>
  )
}

// myJSXElement=( javascript element
//  <ul>
//  <li>item1<\li>
//  <li>item2<\li>
//  <li>{interpolation}<\li>
//  <\ul>
// )
ReactDOM.render(<app/>,reactContenRoot);
//ReactDOM.render(app(),reactContenRoot);
