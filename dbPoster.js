import {getDatabase,app,ref,get,set,onAuthStateChanged, getAuth} from './firebase-init.js'
const database = getDatabase(app);


onAuthStateChanged(getAuth(),(user)=>{
    if(!user){
        location.href="./Admin.html";
    }
    if(user.uid!=="kXeuGluMPxdE3OtYu5kbWZ3DeAS2"){
        location.href="./Admin.html";
    }
});

async function readDB(reference) {
    return await get(ref(database, reference));
}

async function writeDB(reference, data) {
    await set(ref(database, reference), data);
    location.href='./index.html';
  }

document.querySelector("form .btn").addEventListener("click",async ()=>{
    const cName=document.querySelector("#coursename").value;
    const imgURL=document.querySelector("#adminimgurl").value;
    const cPrice=document.querySelector("#courseprice").value;
    const duration=document.querySelector("#courseduration").value;
    const des=document.querySelector("#coursedescription").value;
    const period=document.querySelector("#courseperiod").value;
    const cmodule=document.querySelector("#coursemodule").value;
    const cvid=document.querySelector("#coursevidurl").value;
    const obj={
        "name":cName,
        "imgURL":imgURL,
        "price":cPrice,
        "duration":duration,
        "des":des,
        "period":period,
        "module":cmodule,
        "vid":cvid
    }
    let data=await readDB("data");
    data=await data.val();
    if(data){
        data=[...data];
    }
    else{
        data=[];
    }
    data.push(obj);
    writeDB("data",data);
});