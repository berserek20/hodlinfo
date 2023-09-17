async function getData(){
    const data = await fetch('http://localhost:3047/user/read');
    const result = await data.json();
    // console.log()
    console.log("data",result.response,"message",result.message);
   
    // const volume=;

    // const base_unit=;

    var select = document.getElementById('sel');
    for(var i=0;i<result.response.length;i++){
        var name = result.response[i].name.replace("/INR",'');

        var option = `<option value=${name}>${name}</option>`
        select.innerHTML += option;
        // btn.addEventListener('click',(e)=>{
        //     console.log(e)
        //  })
    }
    // function setVal(name){
    //     var price = document.getElementById('conversion');
    //     while(){

    //     }
    //     price.innerHTML =
    // }

     //theme change button
     var table = document.getElementById('mytable');
        for(var i=0;i<result.response.length;i++){
            console.log(result.response[i].name)
            var row = `<tr> 
                            <td> ${i+1}</td> 
                            <td> ${result.response[i].name.replace("/INR",'')}</td>
                            <td> ${result.response[i].last}</td>
                            <td>    ₹ ${result.response[i].buy} /  ₹ ${result.response[i].sell}</td>
                            <td>     ${result.response[i].sell-result.response[i].buy}</td>

                        </tr>`
            table.innerHTML += row;
        }
   
   
     const body = document.querySelector('body');

     const btn = document.getElementById('btn');
     btn.addEventListener('click',()=>{
        body.classList.toggle('darkmode');
     })

}