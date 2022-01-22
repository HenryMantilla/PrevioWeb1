var row=1;

    var Agregar = document.getElementById("Agregar");
    Agregar.addEventListener("click", displayDetails);


    function displayDetails(){
        var Gusto = document.getElementById("Gusto").value;

        var tabla = document.getElementById("MiTabla");

        var newRow= tabla.insertRow(row);
        var cell1= newRow.insertCell(0);
        var cell2= newRow.insertCell(1);
        var cell3= newRow.insertCell(2);

        cell1.innerHTML= Gusto;
        cell2.innerHTML= '<input class="input is-small" type="text" value="0">';
        cell3.innerHTML= '<button class="button is-ghost" type="button" id=temp>Editar</button>';

        const temp =document.getElementById("temp");
        temp.addEventListener("click", ()=>{
            if(temp.innerText === "Editar"){
                temp.innerText = "En edicion";
            }
            else{
                temp.innerText = "Editar";
            }
        });

        row++;
    }
