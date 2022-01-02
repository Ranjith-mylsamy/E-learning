import {getDatabase,app,ref,get,set,onAuthStateChanged, getAuth} from './firebase-init.js'



async function readDB(reference) {
    return await get(ref(database, reference));
}

async function filler(){
    let data=await readDB("data");
    data=await data.val();
    if(data){
        data=[...data];
    }
    else{
        data=[];
    }
    let template=``;
    data.forEach(d => {
        template+=`
        <div class="box">
        <img src="${d['imgURL']}" alt="">
        <h3 class="price">₹${d["price"]}</h3>
        <div class="content">
        <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half"></i>
    </div>
    <div class="title" data-url="${d["vid"]}">${d["name"]}</div>
    <p>
        ${d["des"]}
    </p>
    <div class="info">
        <h3><i class="far fa-clock">${d["duration"]} hrs</i></h3>
        <h3><i class="far fa-calendar-alt">${d["period"]} months</i></h3>
        <h3><i class="fas fa-book">${d["module"]} modules</i></h3>
    </div>
    </div>
    </div>`

    });
    document.querySelector(".box-container").innerHTML+=template;
    await localStorer();
}

function localStorer(){
    document.querySelectorAll(".title").forEach(d=>{
        console.log(d);
        d.addEventListener("click",(e)=>{
            console.log("Clicking");
            if(!e.target.dataset.url) return;
            localStorage.setItem("vid",e.target.dataset.url);
            location.href="./course.html"
        })
    })
}

filler();