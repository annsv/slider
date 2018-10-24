class Slider{

  constructor(el){
    this.el = document.querySelector(el);
    this.init();
  }
  
  init(){
    this.navItems = this.el.querySelectorAll('.slider__item');
    this.left = this.el.querySelector('.slider__arrows-left');
    this.right = this.el.querySelector('.slider__arrows-right');   
    this.slideContainer = this.el.querySelector('.slider__container');
    this.leftArrow();
    this.rightArrow();
    
    this.buildBullets(this.navItems);
  }
  
  buildBullets (items) {
    const bullets = this.getBulletsTpl(items);
    const ul = document.createElement('ul');
    
    bullets.forEach(bullet => {
      ul.appendChild(bullet.elem);
      
      bullet.elem.addEventListener('click', () => {
        //console.log(bullet);
        let index;
        if(bullet.elem.getAttribute('data-index') !== null){
          index = parseInt(bullet.elem.getAttribute('data-index'), 10) + 1;    
          console.log("bullets", index);
        } 
        let activeSlide = this.el.querySelector('.slider__item:nth-child(' + index + ')');
        this.slideContainer.style.left = '-' + activeSlide.offsetLeft + 'px';

      })
    });
    
    document.querySelector('.nav-holder').appendChild(ul);
    
  }
  
  getBulletsTpl (items) {
    const ul = document.createElement('ul');
    ul.classList.add('slider__navigation');
    
    const lis = Array.from(items).map((slide, i) => {
      const li = document.createElement('li');
      li.classList.add('slider__navigation-item');
      li.setAttribute('data-index', i);
      li.textContent = i + 1;
      ul.appendChild(li,1);
      
      return { elem: li, slide: slide }
    });
    
    return lis
  }
  
  leftArrow(){
    this.slide(1,this.left,-1);
  }  
  rightArrow(){
    this.slide(1,this.right,1);
  } 
  
        slide (index,link,direction) {
          link.addEventListener('click', () => {
            //console.log(link);
            let items = Array.from(this.navItems);
            items.length;

            if(direction === 1){  
              if (index < items.length){
              index++;
              } else {
                index = 0; 
                index++;
              }
              console.log("arrow right",index);
            } else {
              if (index <= 1){
                index =  items.length; 
                 // index--;
                } else {
                  index--;
                }

              console.log("arrow left",index);
            }
            let activeSlide = this.el.querySelector('.slider__item:nth-child(' + index + ')');
            
            this.slideContainer.style.left = '-' + activeSlide.offsetLeft + 'px';
            
          })
        }
    
  };

  //API
  var slider = new Slider('.slider');