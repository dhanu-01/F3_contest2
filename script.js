const card = document.getElementById("menu");
let menuList = []

async function getMenu() {
    const response = await fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    const data = await response.json();
    console.log(data);
    let menuData = "";
    data.map((menu) => {
        menuList.push(menu);
        menuData += `<div class="card" style="width: 18rem;">
        
        <img src="${menu.img}" class="card-img-top" alt="...">

        <div class="card-body">
          <h5 class="card-title">Name: ${menu.name}</h5>
          <h5 class="card-title">Dsc: ${menu.dsc}</h5>
          <p class="card-text">country: ${menu.country}</p>
          <p class="card-text">price: ${menu.price}</p>
          <p class="card-text">rate: ${menu.rate}</p>
        </div>
      </div>`
        card.innerHTML = menuData
    })
}


getMenu();


function takeOrder() {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            const array = [];
            for (let i = 0; i < 3; i++) {
                const random = Math.floor(Math.random() * menuList.length);
                array.push(menuList[random]);
            }
            resolve(array);
        }, 3500)
    })
}


function orderPrep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const obj = {order_status:true, paid:false}
           resolve(obj);
        },2500)
    })
}

function payOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const obj = {order_status:true, paid:true}
         resolve(obj);
        },1000)
    })
}

function thankyouFnc(){
    alert("Thank You")
}


takeOrder()
.then((data)=>{
    console.log(data);
    return orderPrep(data);
})
.then((data)=>{
    console.log(data);
    return payOrder();
})
.then((data)=>{
    console.log(data)
    return thankyouFnc();
})