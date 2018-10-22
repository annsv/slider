class Slider{
  constructor(el){
    this.el = document.querySelector(el);
    this.init();
  }
  
  init(){
    this.navItems = this.el.querySelectorAll('.slider__navigation-item');
    this.slideContainer = this.el.querySelector('.slider__container');
    this.bullets();
    this.leftArrow();
    this.rightArrow();
  }
  
  bullets(){
    for(let i=0; i < this.navItems.length; i++){
      let navItem = this.navItems[i];
      this.slide(navItem, 1);
    }
  }
  leftArrow(){
    this.left = this.el.querySelectorAll('.slider__arrows-left');
    this.slide(this.left, -1);
    console.log("left");
  }  
  rightArrow(){
    this.right = this.el.querySelectorAll('.slider__arrows-right');    
    this.slide(this.right, 1);
    console.log("right");
  } 
  
  slide( link,direction ){
    var self = this;
    link.addEventListener('click', function(){
      var index = parseInt(link.getAttribute('data-index'), 10) + direction;      
      var activeSlide = self.el.querySelector('.slider__item:nth-child(' + index + ')');
      
      self.slideContainer.style.left = '-' + activeSlide.offsetLeft + 'px';
      
    })
  }
  };

  //API
  var slider = new Slider('.slider');


  