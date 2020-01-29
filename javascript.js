let arrayOfDogs = [
    {
      name: 'Aron',
      breed: 'Golden Retriever',
      hair: 'Medium',
      size: 'Large',
      age: 1,
      color: 'Golden'
    },
    {
      name: 'Jack',
      breed: 'Fox terrier',
      hair: 'Short',
      size: 'Medium',
      age: 10,
      color: 'White-brown'
    },
    {
      name: 'Hector',
      breed: 'Dogo Argentino',
      hair: 'Short',
      size: 'Extra large',
      age: 1,
      color: 'White'
    },
    {
      name: 'Alfa',
      breed: 'Great Dane',
      hair: 'Short',
      size: 'Extra large',
      age: 5,
      color: 'Gray'
    },
    {
      name: 'Bono',
      breed: 'French bulldog',
      hair: 'Short',
      size: 'Small',
      age: 6,
      color: 'Black'
    }
  ];

  //Selectors 

  let thead = document.querySelector('thead');
  let btn = document.getElementById('btn');
  
  // Event

 btn.addEventListener (`click`, () =>{
  fetch(`https://api.myjson.com/bins/fucwu`)
  .then(response => {

    console.log(response,'response has arrived');
    return response.json();
    
  })
  
  // Prasanje, zasto sto i da pisam dole vo .then vo zagradata mi go vrakja objektot so dogs, malce me zbuni toa
  .then(dogs =>{
      console.log(dogs)

   

   for (let i = 0; i < dogs.length ; i++ ){  
   
   
    
  let tr  = document.createElement ('tr')
  let td1 = document.createElement('td')
  let td2 = document.createElement('td')
  let td3 = document.createElement('td')
  let td4 = document.createElement('td')
  let td5 = document.createElement('td')
  let td6 = document.createElement('td')



  td1.innerText = dogs[i].name,
  td2.innerText = dogs[i].breed,
  td3.innerText = dogs[i].hair,
  td4.innerText = dogs[i].size

  if (dogs[i].age < 1){
    td5.innerText = 'Puppy'
   }else {td5.innerText = dogs[i].age
  }
  
  td6.innerText = dogs[i].color,
  
  

  thead.appendChild(tr);
  thead.appendChild(td1);
  thead.appendChild(td2);
  thead.appendChild(td3);
  thead.appendChild(td4);
  thead.appendChild(td5);
  thead.appendChild(td6);

  
}
  })


  

  

  


   

  .catch((error) =>{
    console.log(error);
})
  
})
