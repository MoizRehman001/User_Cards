let RefToCard = document.getElementById('card-container');
//Fetching the data from the api
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.status == 200 && xhr.readyState == 4){
        var responseFromServer = xhr.responseText;
        var JSONData = JSON.parse(responseFromServer);
        for(let i=0 ; i<JSONData.results.length ; i++){
             let users = JSONData.results[i];
             var row = `<section value=${i} id="card">
                            <div class="card-image">
                                <img className= "card-image" height=100px  src=${users.picture.large}>
                            </div><br>
                            <p class="name">${users.name.title} ${users.name.first} ${users.name.last}</p><br>
                            <p> Sex : ${users.gender}</p><br>
                            <p>Email : ${users.email}</p><br>
                            <p>Location : ${users.location.city}</p><br>
                            <p>Country :  ${users.location.country}</p><br>
                            </div>
                        <section>`
            RefToCard.innerHTML = RefToCard.innerHTML + row;
        }
    }
}
xhr.open('GET','https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
xhr.send();