import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout';
import Grid from './components/Grid';
import img0 from './assets/0.png'
import img1 from './assets/1.png'
import img2 from './assets/2.png'

function App() {
  


  const winCases = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [3, 6, 9],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7]
  ]

  const imgSources = [img2, img0, img1];

  const [grid, setGrid] = useState([
    { id: 1, img: 0, checked: false},
    { id: 2, img: 0, checked: false},
    { id: 3, img: 0, checked: false},
    { id: 4, img: 0, checked: false},
    { id: 5, img: 0, checked: false},
    { id: 6, img: 0, checked: false},
    { id: 7, img: 0, checked: false},
    { id: 8, img: 0, checked: false},
    { id: 9, img: 0, checked: false},
  ]);
  const [user, setUser] = useState(true);

  function handlePlay(elementID) {
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !(item.checked)) {
        return {id: item.id, img: user ? 1 : 2 , checked: true };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);
  }

  function checkWin(){
    let firstPlayer = ((grid.filter((element) => (element.img ==1))).map((item) => item.id));
    let secondPlayer = ((grid.filter((element) => (element.img ==2))).map((item) => item.id));
    for(let row of winCases){
      if(row.every((index) => firstPlayer.includes(index))){
        return 1;
      }
      if(row.every((index) => secondPlayer.includes(index))){
        return 2;
      }
    }
    console.log(firstPlayer);
    console.log(secondPlayer);
  }


  while(checkWin() == undefined){
    return (<>
    <MainLayout>
      <Grid grid={grid} handlePlay={handlePlay} imgSources={imgSources}/>
    </MainLayout>
    </>);
  }
  if(checkWin() != undefined){
    return (<>
    <h1>{checkWin()==1 ? "X" : "O"} player won!</h1>
    <button className='my-5 transition duration-500 bg-fuchsia-100 border-4 border-pink-200 hover:border-3 hover:bg-pink-50 hover:border-pink-100' onClick = {() => {
      const newGrid = [
        { id: 1, img: 0, checked: false},
        { id: 2, img: 0, checked: false},
        { id: 3, img: 0, checked: false},
        { id: 4, img: 0, checked: false},
        { id: 5, img: 0, checked: false},
        { id: 6, img: 0, checked: false},
        { id: 7, img: 0, checked: false},
        { id: 8, img: 0, checked: false},
        { id: 9, img: 0, checked: false},
      ];
      setGrid(newGrid);
    }}>
      click here to resume
    </button>
    </>)
  }
}

export default App;
