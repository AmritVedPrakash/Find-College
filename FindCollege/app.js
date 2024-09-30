let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    console.log("button was clicked");
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr  = await getColleges(country);
    console.log(colArr);
    show(colArr);
});
function show(colArr){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        // create list item
        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}



async function getColleges(country) {
    try{
       let res= await axios.get(url+country);
       return(res.data);
    }catch(e){
        console.log("error:",e);
        return [];
    }
}