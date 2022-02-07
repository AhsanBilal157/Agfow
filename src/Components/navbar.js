import React from 'react';
import '../App.css';
import agfowlogo from './agfow_logo_golden.png'
import $ from 'jquery';
export const Navbar =() =>{
    $(document).ready(function(){

        $('#menu').click(function(){
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
        });
    
        $(window).on('scroll load',function(){
    
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
    
            if($(window).scrollTop() > 60){
                $('header').addClass('header-active');
            }else{
                $('header').removeClass('header-active');
            }
    
            $('section').each(function(){
    
                let top = $(window).scrollTop();
                let height = $(this).height();
                let offset = $(this).offset().top - 200;
                let id = $(this).attr('id');
    
                if(top >= offset && top < offset + height){
                    $('.navbar ul li a').removeClass('active');
                    $('.navbar').find(`[href="#${id}"]`).addClass('active');
                }
    
            });
    
        });
    
    })

    return(
        
        <header>
<a href="#" className="logo"><img src={agfowlogo} alt='logo' height={60}/></a>

<div id="menu" class="fas fa-bars"></div>

<nav className="navbar">
    <ul>
        <li><a className="active" href="#home">home</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Aboutus">About us</a></li>
        <li><a href="#forecasting">Forecasting</a></li>
        <li><a href="#news">News</a></li>
        <button class="btn" >Contact us </button>
    </ul>
</nav>

</header>

    );
}