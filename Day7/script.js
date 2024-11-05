async function fetchData() {
    try{
        let response=await fetch('https://api.github.com/users?per_page=10');
        let data=await response.json();
        html=''
        data.forEach((i)=>{
/*             let h1 =document.createElement("h1");
        h1.textContent=i.node_id;
        let a= document.createElement("a");
        a.textContent=i.node_id;
        a.setAttribute("href",i.html_url);
        
        let top=document.getElementById('info');
        top.appendChild(h1);
        top.appendChild(a); */
        html+=`<image class='js-ima st' src="${i.avatar_url}"><b>Node Id:</b> ${i.node_id}  <b>Html Url:</b> <a href="${i.html_url}">Click here to visit page</a><br>`;
     } );

     document.body.querySelector('#info').innerHTML=html;

    }
    catch(e){
        console.log(e);
    }
}
// fetchData();