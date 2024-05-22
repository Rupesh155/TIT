let canvas=   document.querySelector('canvas')

let ctx=  canvas.getContext('2d')
let cell=50
let snekcell=[[0,0]]
let direction='right'
let gameOver=false

 let id=  setInterval(()=>{
    draw()
    update()
},100)
document.addEventListener('keydown',function(e){
    // console.log(e);
    if(e.key==='ArrowUp'){
        direction='up'
       
    }
else if(e.key==='ArrowDown'){
    direction='down'
   
}
else if(e.key==='ArrowLeft'){
    direction='left'
   
}
else{
    direction='right'
   

}

})

function draw(){
    if(gameOver){
        clearInterval(id)
        return;
    }
    ctx.clearRect(0,0,1800,800)
    for(let i of snekcell){
        ctx.fillStyle='red'

        ctx.fillRect(i[0],i[1],cell,cell)
    }


}

draw()

function update(){
 let headX=   snekcell[snekcell.length-1][0]
     let headY=  snekcell[snekcell.length-1][1]
     let newX
     let newY
     if(direction==='up'){
        newX=headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
     }
     else if( direction==='left'){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
     }
     else if(direction==='down'){
        newX=headX
        newY=headY+cell
        if(newY===800){
            gameOver=true
        }
     }
     else{
        newX=headX+cell
        newY=headY
        if(newX===1800){
            gameOver=true
        }
     }

     snekcell.push([newX,newY])
     snekcell.shift()


}


// setInterval(()=>{
//     console.log('chalt rh');
// },10)




// let arr=[1,2,34,45]
// arr.push(50)
// console.log(arr);
// arr.shift()
// console.log(arr);