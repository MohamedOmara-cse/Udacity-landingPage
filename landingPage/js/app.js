  
// checking if the section in the viewPort or not 

function isViewedSection ()
{
    const element=arguments[0];
    if(element.getBoundingClientRect().top<=270  && element.getBoundingClientRect().top>-300  ) 
    return true;
    else
    return false;
}
 


document.addEventListener("DOMContentLoaded",function(){
// Getting all Sections by tag name 
const sections=document.querySelectorAll('section');
const ul=document.querySelector('#navbar__list');

//Build the navigation menu

for (let i=0;i<sections.length;i++){
 const a =document.createElement('a');
 a.href=`#${sections[i].id}`;
 a.classList='menu__link';
 a.innerHTML=sections[i].dataset.nav;
 
 //Adding link to <li> and append it to it's ul

 const li= document.createElement('li');
 li.className=sections[i].id.toUpperCase();
 li.appendChild(a);
 ul.appendChild(li);
}

// view animation on the viewedSection 
document.addEventListener('scroll', ()=>{

for (let i=0 ; i<sections.length ; i++ ){

    if(isViewedSection(sections[i]))
    {
    
     sections[i].classList.add("your-active-class");
     document.getElementsByClassName(sections[i].id.toUpperCase())[0].style.backgroundColor='blue';
     
    }
     else
     {
     sections[i].classList.remove("your-active-class");
     document.getElementsByClassName(sections[i].id.toUpperCase())[0].style.backgroundColor='white';
     
     }
    }
})

});




