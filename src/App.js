let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#name").value;
    

   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        qualification: document.getElementById("qualification").value,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value,
    };
    console.log(data);

    //Card Template


    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
   
      <div class="NameContainer">${data.name}</div>
      <div class="QualificationContainer">${data.qualification}</div>
      <a href="abc@gmail.com">${data.email}</a><br>
      <div class="SkillContainer">${data.skills}</div>
      <a href="www.projectabc.com">${data.websitelink}</a>
      
      
    `
    console.log(newlist);
    
    output.appendChild(newlist);
   
    
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})
