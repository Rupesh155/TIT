let canvas=   document.querySelector('canvas')

let ctx=  canvas.getContext('2d')
let cell=50
let snekcell=[[0,0]]

function draw(){
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
     let newX=headX+cell
     let newY=headY

     snekcell.push([newX,newY])
     snekcell.shift()


}
setInterval(()=>{
    draw()
    update()
},100)

// setInterval(()=>{
//     console.log('chalt rh');
// },10)




// let arr=[1,2,34,45]
// arr.push(50)
// console.log(arr);
// arr.shift()
// console.log(arr);