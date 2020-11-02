class Rectangle{

   constructor(x,y,width,height){
       this.width=width;
       this.height=height;
   
           var option={
               isStatic:true
           }  //error was there it was (), instead of {} ; and its isStatic:true
       
           this.body=Bodies.rectangle(x,y,width,height,option) //its' option ', the var you created not 'options'
           World.add(world,this.body)
       
   }
       
       display()
       {
          var pos=this.body.position
          rect(pos.x,pos.y,this.width,this.height) //this.width, this.height
       
       }
       
       
       }