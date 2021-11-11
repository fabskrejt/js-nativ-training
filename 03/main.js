
const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

/*const onClickHandler = (word) => {
   return  () => alert(word)
}*/
/*sml.onclick = onClickHandler*/

/*
sml.addEventListener('click', onClickHandler('Yo'))
sml.addEventListener('click', () => alert('fff'))
*/


/*const onClickHandler = (e) => {
   alert('yo')
   console.dir(e)
}*/


/*
const onClickHandler = (e) => {
if(e.target.tagName === 'BUTTON'){

}
console.log(e.currentTarget.id)
}
*/

const onClickHandler = (e) => {
 e.stopPropagation()
   console.log(e.currentTarget.id)
}


const hey =() => alert( 'hey')
sml.addEventListener('click', onClickHandler)
mdm.addEventListener('click', onClickHandler)
big.addEventListener('click', onClickHandler)
