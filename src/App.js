import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './Conponents/Card';
import SingleCard from './Conponents/SingleCard';

const arrImages = [
    { "src" : "/images/image_downloader_1688829637685.jpg.webp" , matched : false},
    { "src" : "/images/image_downloader_1688829730681.jpg" , matched : false},
    { "src" : "/images/image_downloader_1688829765926.jpg" , matched : false},
    { "src" : "/images/image_downloader_1688829796831.png.jpg" , matched : false},
    { "src" : "/images/image_downloader_1688831176628.png" ,matched : false},
    { "src" : "/images/image_downloader_1688834493757.jpg.webp" , matched : false}
]

export default function App() {

  const [cards , setCards] = useState([]);
  const [turns , setTurns] = useState(0);

  const shuffelcards = () =>{
    const shuffelcards = [...arrImages , ...arrImages]
    .sort(()=> Math.random() - 0.5)
    .map((card) => ({...card , id : Math.random()}))
    console.log(shuffelcards);

    setCards(shuffelcards);
    setTurns(0);
  }

  console.log(cards);
  console.log(turns);


    // const [cards , setCards] = useState([]);
    // const [cont , setCont] = useState(0);

    // const [choiseone , setChoiseone] = useState();
    // const [choisetwo , setChoisetow] = useState();

    // const changeFun =(card)=>{
    //     choiseone ? setChoisetow(card) : setChoiseone(card)
    // }

    // useEffect(()=>{
    //   if(choiseone && choisetwo){
    //     setCards(prevCards => {
    //       return prevCards.map(card => {
    //         if(card.src === choiseone){
    //           return {...card , matched : true}
    //         }else{
    //           return card;
    //         }
    //       }) 
    //     })
    //     funRest()
    //   }else{
    //    funRest() 
    //   }
    // } , [choiseone , choisetwo])

    // console.log(cards)

    // const funRest = () =>{
    //     setChoiseone(null);
    //     setChoisetow(null);
    //     setCont(p => p+1);
    // }

    // const doubleFun = () =>{
    //    const  newarrImages = [...arrImages , ...arrImages]
    //    .sort(() => Math.random() - 0.5).map((card) => ({...card, id : Math.random()}))
    //    setCards(newarrImages);
    //    setCont(0);
    // }

    // console.log(cont);
    // console.log(cards);

  return (
    <div className='App'>


        <h1>Menory Game </h1>
        <button onClick= {shuffelcards}>new game</button>

        <div className='card-grid'>
          {
            cards.map( card => (
              <SingleCard key={card.id} card={card}/>
            ))
          }
        </div>
        
    </div>
  )
}
