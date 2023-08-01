import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import {View} from './component/View'
//getting the values of local storage
const getDatafromLS=()=>{
  const data=localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
    //json.parse convert the string to object format we have string stored in localstorage
  }
  else
  return [];
}

function App() {

  //main Array of objects state||book state|| books array of objects
  const [books,setbooks]=useState(getDatafromLS());

  //input fields state=
  const[title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [price,setPrice]=useState("");


//form submit event 
const handleAddBookSubmit=(e)=>{
  e.preventDefault();
  //creating an object
  let book={
    title,//when key and value are same we can write key only according to ES6
    author,
    price
  }
  setbooks([...books,book]);
  setTitle('');//default values empty
  setAuthor('');
  setPrice('');

}

//delete data from LS
const deleteBook=(price)=>{
  const filteredBooks=books.filter((element,index)=>{
    return element.price!==price;
  })
  setbooks(filteredBooks);

}

//saving data into local storage
useEffect(()=>{
  localStorage.setItem('books',JSON.stringify(books))//json.stringify is used to convert json object or array of object into string
},[books])

  return (
    <div className='Wrapper'>
     <h1>BookList App</h1>
     <p>Add and view your books using local storage</p>
     <div className="main">
      <div className="form-container">
          <form autoComplete="off" className="form-group" onSubmit={handleAddBookSubmit}>
              <label>Titel</label>
              <input type="text" placeholder="Enter title" className="form-control" required
              onChange={(e)=>setTitle(e.target.value)} value={title}></input>
              <br></br>

             <label>Autor</label>
              <input type="text" placeholder="Enter Author" className="form-control" required
              onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
               <br></br>

                <label>price</label>
              <input type="text" placeholder="Enter price" className="form-control" required
              onChange={(e)=>setPrice(e.target.value)} value={price}></input>
              <button type="submit" className="btn btn-success btn-md">ADD</button>
            </form>

      </div>
     
     <div className="view-container">
     {books.length>0 &&<> 
     <div className="table-responsive">
     <table className="table">
      <thead>
          <tr>
              <th>Price</th>
              <th>Title</th>
              <th>Author</th>
              <th>Delete</th>
            </tr>
      </thead>
      <tbody>
        <View books={books} deleteBook={deleteBook}/>
      </tbody>
      </table>
     </div>
     <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
     

     {books.lenght<1 && <div>No books are added yet</div>}

      </div>
    </div>
    </div>
  );
}

export default App;
