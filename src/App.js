import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from './components/Form';

function App() {
  // const [data,setdata]= useState(0);

  // console.log(data);
  // const fun=() =>{
  //   // alert("message")
  //   setdata(data+1);
 
  // }
  // const Fun=() =>{
  //   setdata(data-1);
  // }
  // console.log(carddata);
  const [carddata,setcarddata]=useState([{
    img:"https://www.shutterstock.com/image-photo/chairman-pakistan-tehreek-e-insaf-260nw-2403830523.jpg",
    heading:"Card One",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,",
  },
  {
    img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400",
heading:"Card Two",
para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepekdkjfkjdfjkfjf"
  },
 {
  img:"https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  heading:"Card Three",
  para:"Lorem ispum dolor sit amet constructour heading"
 },
 {
  img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400",
heading:"Card Four",
para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepekdkjfkjdfjkfjf"
},
{
img:"https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
heading:"Card Five",
para:"Lorem ispum dolor sit amet constructour heading"
},

  ]);
  console.log(carddata);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div >
    <Navbar></Navbar>
<div className="slider-container">
<Slider {...settings}>  
{
  carddata.map((item,ind)=>(
    <Card  img={item.img} heading={item.heading} para={item.para}/>
  ))
}
</Slider >
 
    </div>
 
 <Form/>
     

    <Footer></Footer>
    </div>


  );
  
}

export default App;
