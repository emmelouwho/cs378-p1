document.addEventListener("DOMContentLoaded", function(){
    const addButtons = document.getElementsByClassName("add");  
    for(var i = 0; i < addButtons.length; i++){ 
        addButtons[i].addEventListener("click", addValue); 
    }
})

document.addEventListener("DOMContentLoaded", function(){
    const minusButtons = document.getElementsByClassName("minus");  
    for(var i = 0; i < minusButtons.length; i++){ 
        minusButtons[i].addEventListener("click", minusValue); 
    }
})

document.addEventListener("DOMContentLoaded", function(){
    const allClear = document.getElementsByClassName("clear-all")
    const clearButton = allClear[0];
    clearButton.addEventListener("click", clearAll)
})

document.addEventListener("DOMContentLoaded", function(){
    const allOrder = document.getElementsByClassName("order")
    const orderButton = allOrder[0];
    orderButton.addEventListener("click", order)
})

function addValue(e){
    const item = e.target.id;
    const counts = document.getElementsByClassName("amount");  
    for(var i = 0; i < counts.length; i++){ 
        if(counts[i].id === item){
            const count = parseInt(counts[i].innerHTML);
            counts[i].innerHTML = count + 1;
        }
    }

    const total = document.getElementsByClassName("total-amount")[0];  
    const amounts = document.getElementsByClassName("dollar-amount");  
    for(var i = 0; i < amounts.length; i++){ 
        if(amounts[i].id === item){
            const str = amounts[i].innerHTML.replace(/\$/g, '')
            const val = parseInt(str);
            const currTotal = parseInt(total.innerHTML);
            total.innerHTML = currTotal + val;
        }
    }

}

function minusValue(e){
    const item = e.target.id;
    let notZero = false;
    const counts = document.getElementsByClassName("amount");  
    for(var i = 0; i < counts.length; i++){ 
        if(counts[i].id === item){
            const count = parseInt(counts[i].innerHTML);
            if(count !== 0){
                notZero = true;
                counts[i].innerHTML = count - 1;
            }
        }
    }

    if(notZero){
        const total = document.getElementsByClassName("total-amount")[0];  
        const amounts = document.getElementsByClassName("dollar-amount");  
        for(var i = 0; i < amounts.length; i++){ 
            if(amounts[i].id === item){
                const str = amounts[i].innerHTML.replace(/\$/g, '')
                const val = parseInt(str);
                const currTotal = parseInt(total.innerHTML);
                total.innerHTML = currTotal - val;
            }
        }
    }
}


function clearAll(){
    const counts = document.getElementsByClassName("amount");  
    for(var i = 0; i < counts.length; i++){ 
        counts[i].innerHTML = 0;
    }

    const total = document.getElementsByClassName("total-amount")[0];  
    total.innerHTML = 0
}

function order(){
    let orderStr = "Order Placed!\n"
    const counts = document.getElementsByClassName("amount");  
    for(var i = 0; i < counts.length; i++){ 
        let id = counts[i].id
        id = id === "mac-and-cheese" ? "mac & cheese" : id;
        const itemNum = counts[i].innerHTML;
        if(itemNum !== "0"){
            orderStr += itemNum + " " +  id + " ";
        }
    }
    alert(orderStr)

}