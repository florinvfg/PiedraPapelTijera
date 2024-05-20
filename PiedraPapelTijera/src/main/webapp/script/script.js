window.onload=function () {
    let div=document.querySelector(".maquina");
    let img=document.querySelector("#respuestaMaquina");
    let user = document.querySelectorAll('input[type=radio][name="opcion"]');//all cuando son varios
    user.forEach(function (userOption) {
        userOption.addEventListener("click", function () {

            if (this.checked) {
                //mostrar que opcion marco el cliente
                let userResp = this.value;
                let maq = parseInt(Math.random() * 3 + 1);
                console.log("Maquina ->" + maq);
                console.log("Usuario -> " + userResp);
                div.style.visibility="visible"
                div.classList.add("maquina-respuesta");

                switch (maq){
                    case 1:{
                        img.src= "img/piedra.png";
                      break

                    }
                    case 2:{
                        img.src= "img/papel.png";
                        break

                    }
                    case 3:{
                        img.src= "img/tijera.png";
                        break

                    }
                }
            }
        })

    })


}



