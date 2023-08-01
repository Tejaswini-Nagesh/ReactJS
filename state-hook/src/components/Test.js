import React,{useState,useEffect} from 'react'

 function Test() {
    const [content, setContent]=useState('posts')
    const [count,setCount]=useState(0)
    const [items,setItems]=useState([])

    useEffect(()=>{
        console.log('componetDidMount');
    },[])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/' +content)
      .then(response => response.json())
    .then(json => setItems(json))

        console.log('componentDidUpdate');
        return ()=>{
            console.log('ummount')
        }
    },[content])
   

  return (
    <div>
        <div>
                <button onClick={()=>setCount(count+1)}>Count{count}</button>
        </div>
      <button onClick={()=>setContent('posts')}>Posts</button>
      <button onClick={()=>setContent('users')}>User</button>
     <button onClick={()=>setContent('comments')}> Comments</button>
        <h1>{content}</h1>

        <ul>
            {items && items.map(item=>{
               return <li key={item.id}> {item.id}</li>
            })}
        </ul>

    </div>
  );
}
export default Test;
