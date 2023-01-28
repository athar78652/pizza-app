import React from 'react';
import {useNavigate } from 'react-router-dom';
import "./menu.css";


const Menu = () => {

const MenuList = [
    {
        img:"https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$150",

    },
    {
        img:"https://content3.jdmagicbox.com/comp/mumbai/29/022p7704029/catalog/dominos-pizza-malad-west-mumbai-pizza-outlets-restaurants-91a6r.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$200",
    },
    {
        img:"https://www.reviewsrilanka.com/wp-content/uploads/2020/09/dominos-pizza.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$199",
    },
    {
        img:"https://www.jubilantfoodworks.com/images/brand_pic3.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$259",
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/chains/8/18698898/a3f876979c7b1a123ff8d0548d774cb1.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$102",
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/chains/3/18387423/ff9b52642f4e6f0350d1c5692c55822a_featured_v2.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$169",
    },
    {
        img:"https://content3.jdmagicbox.com/comp/bangalore/g6/080pxx80.xx80.200116190721.k7g6/catalogue/ovenstory-pizza-chikbanavara-bangalore-pizza-outlets-5xdx6wgo1k.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$501",
    },
    {
        img:"https://content.jdmagicbox.com/comp/tirupati/t6/9999px877.x877.200323210559.v9t6/catalogue/ovenstory-pizza-korlagunta-tirupati-pizza-outlets-ovenstory-pizza-ycb5yeo83r-250.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$659",
    },
    {
        img:"https://content.jdmagicbox.com/comp/bangalore/t2/080pxx80.xx80.200116191100.g1t2/catalogue/ovenstory-pizza-hsr-layout-bangalore-pizza-outlets-7uvhbmvrc6-250.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$230",
    },
    {
        img:"https://content3.jdmagicbox.com/comp/delhi/n3/011pxx11.xx11.170524163625.x3n3/catalogue/ovenstory-pizza-rohini-delhi-pizza-outlets-ovenstory-pizza-46nwnffx5l.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$110",
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/9/20365759/cd024bcab34eef8eb841d22e6a3a05e4.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$165",
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/chains/3/19056943/06029b048ef65a9180d3ab70f50c3f19_featured_v2.jpg",
        name:"vegetarian pizzas, it's softer and tastier",
        price:"$225",
    },
];

const navigate=useNavigate();



    return (<>
            <h1 className='heading'>Pizza's Menu List</h1>
        <div className='main'>
            {
                MenuList.map((item)=>{
                    return (
                        <>
                            <div className='card'>
                                <div className='image'>
                                    <img src={item.img} alt=''/>
                                </div>
                                <p className='title'>{item.name}</p>
                                <h1 className='price'>{item.price}</h1>
                                <div className='btn'><button onClick={()=>navigate('/signin')}><h2>Order Now</h2></button></div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>)
        
    
        
}

export default Menu;
