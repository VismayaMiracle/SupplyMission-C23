class Package{

  constructor(x,y){
      this.width=50;
      this.height=50;
  
          var option={
              isStatic:true,
              restitution : 1.0
          }  
      this.image = loadImage('package.png')
          this.body=Bodies.rectangle(x,y,50,50,option) 

          World.add(world,this.body)
      
  }
release() {
      if ( keyDown(DOWN_ARROW) ){
     
         Body.setStatic(this.body,false)
         
       }
       if (keyCode === LEFT_ARROW) {
   
        var  translation={x:-2,y:0}
          Matter.Body.translate(this.body, translation)
        }

        if (keyCode === RIGHT_ARROW) {
        var  translation={x:2,y:0}
          Matter.Body.translate(this.body, translation)
        }

     }
      
      display()
      {
         var pos=this.body.position
         imageMode(CENTER)
         image(this.image,pos.x,pos.y,50,50)
         
      
      }
      
      
      }