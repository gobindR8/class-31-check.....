class lightning{
    constructor(x,y,width,height){
        this.rand=random
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.thunder1=loadImage("1.png")
        this.thunder2=loadImage("2.png")
        this.thunder3=loadImage("3.png")
        this.thunder4=loadImage("4.png")
        this.body1=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.body2=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.body3=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.body4=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})



    }
     display(){
        
        var rand= this.random
var thunder1= this.thunder1
var thunder2= this.thunder2



   rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder= createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
         case 1: thunder.addImage(thunder1)
         break;
         case 2: thunder.addImage(thunder2)
          break;
        default: break

        }
         thunder.scale=random(0.3,0.6)
    }
    }


    
}