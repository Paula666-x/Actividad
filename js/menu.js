let listElements=document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{
      //alert();
      listElement.classList.toggle('arrow'); 

      let height=0;
      let menu=listElement.nextElementSibling;
      console.log(menu.scrollHeight)
      if(menu.clientHeight=="0"){
        height=menu.scrollHeight;
      }
      menu.style.height=height+"px";/*´${height}px´;*/
    })
  
});