window.onload=function () {
    let contadorU=0;
    let contadorM=0;
    let div=document.querySelector(".maquina");
    let img=document.querySelector("#respuestaMaquina");
    let user = document.querySelectorAll('input[type=radio][name="opcion"]');//all cuando son varios
    user.forEach(function (userOption) {
        userOption.addEventListener("click", function () {
     document.querySelector("#mensaje").innerHTML="";
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


                if (userResp==maq){
                    msm="Empate";
                }else if (userResp==1 && maq==2){
                    contadorM++;
                    msm="Gana la Maquina";

                }else if(userResp==1 && maq==3){
                    contadorU++;
                    msm="Ganas Tu";
                }else if(userResp==2 && maq==3){
                    contadorM++;
                    msm="Gana la Maquina";
                }else if(userResp==3 && maq==1){
                    contadorM++;
                    msm="Gana la Maquina";
                }else if (userResp==3 && maq==2){
                  contadorU++;
                  msm="Ganas Tu";
                }
                document.querySelector("#mensaje").innerHTML=msm;
                document.querySelector("#contador").innerHTML=`Usuario:${contadorU} | Maquina:${contadorM}`;



            if (contadorU==10 || contadorM==10){
                if (contadorU==10){
                    ganador();
                }else{
                    let marquesina=document.querySelector(".marquesina");
                    marquesina.style.display="block";

                }

                let boton=document.querySelector("#nuevaP");
                let salir=document.querySelector("#salir")
                boton.style.display="block";
                salir.style.display="block";

                boton.addEventListener("click",function (){
                    window.location.replace("index.jsp");
                })
                salir.addEventListener("click",function (){
                 window.close();


                })
                user.forEach(function (userOption){
                    userOption.disable=true;
                let imagenes=document.querySelectorAll(".imagenes");
                imagenes.forEach(function (img){
                    img.style.transform="scale(1.0)";
                    img.style.filter="grayscale(100%)";
                    img.addEventListener("mouseover",function (){
                        img.style.cursor="none";
                    })
                })

                })
            }
        }

    })


})

}

