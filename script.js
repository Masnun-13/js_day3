const cards = []
const cardimages = document.getElementsByClassName("card");
var output = document.getElementById("light")
var input = document.getElementById("draw")
function displayCard(n, val)
{
    switch(val){
        case 1:
            cardimages[n].src="image/1.png"
            break;
        case 2:
            cardimages[n].src="image/2.png"
            break;
        case 3:
            cardimages[n].src="image/3.png"
            break;
        case 4:
            cardimages[n].src="image/4.png"
            break;
        case 5:
            cardimages[n].src="image/5.png"
            break;
        case 6:
            cardimages[n].src="image/6.png"
            break;
        case 7:
            cardimages[n].src="image/7.png"
            break;
        case 8:
            cardimages[n].src="image/8.png"
            break;
        case 9:
            cardimages[n].src="image/9.png"
            break;

    }
}

function displayCards(array)
{
    for(i=0; i<array.length; i++)
    {
        displayCard(i, array[i])
    }

}

function checkWinCond(){
    let fail = false
    let win = false
    let z = 0
    for(i=0; i<cards.length; i++)
    {
        z=z+cards[i]
        if(z>21){
            fail=true
            break
        }
        else if(z==21)
        {
            win = true
            break
        }
        else continue
    }
    if(win==true)
    {
        output.innerText="Win!"
        output.style.backgroundColor="#378527"
        input.disabled=true
    }
    else if (fail==true)
    {
        output.innerText="Lose!"
        output.style.backgroundColor="#970f0f"
        input.disabled=true
    }
}

function drawCard(){
    x = Number(Math.floor(Math.random() * 10))
    cards.push(x)
    displayCards(cards)
    checkWinCond()
}

drawCard()
drawCard()
displayCards(cards)
