class Slider{

  constructor(el){
    this.el = document.querySelector(el);
    this.init();
  }
  
  init(){

    this.navItems = this.el.querySelectorAll('.slider__navigation-item');
    this.left = this.el.querySelector('.slider__arrows-left');
    this.right = this.el.querySelector('.slider__arrows-right');   
    this.slideContainer = this.el.querySelector('.slider__container');
    this.bullets();
    this.leftArrow();
    this.rightArrow();
  }
  
  bullets(){
    for(let i=0; i < this.navItems.length; i++){
      let navItem = this.navItems[i];
      this.slide(navItem);
    }
  }
  leftArrow(){
    this.slide(this.left,-1);
  }  
  rightArrow(){
    this.slide(this.right,1);
  } 
  
  slide( link,direction = 0 ){
    var self = this;
    console.log(self);
    var index = 0;
    link.addEventListener('click', function(){
      if(link.getAttribute('data-index') !== null){
        index = parseInt(link.getAttribute('data-index'), 10) + 1;    
        console.log("bullets");
      } else if(direction === 1){  
        index++;
        console.log("arrows",index);
      } else{
        index--;
      }
      var activeSlide = self.el.querySelector('.slider__item:nth-child(' + index + ')');
      
      self.slideContainer.style.left = '-' + activeSlide.offsetLeft + 'px';
      
    })
  }
    
  };

  //API
  var slider = new Slider('.slider');


  