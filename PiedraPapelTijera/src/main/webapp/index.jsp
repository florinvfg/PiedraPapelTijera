<!doctype html>
<html lang="es">
<head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
           <title>Juego de Piedra,Papel o Tijera</title>
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
        <script src="script/script.js"></script>
        <script src="script/ganador.js"></script>
</head>
<body>


        <div class="contenedor1 morado">
            <label for="piedra">
        <input type="radio" value="1" name="opcion" id="piedra">
        <img src="img/piedra.png" alt="Piedra"  class="col-6 imagenes">
    </label>

<label for="papel">
    <input type="radio" value="1" name="opcion" id="papel">
    <img src="img/papel.png" alt="Papel"  class="col-6 imagenes">
</label>

<label for="tijera">
    <input type="radio" value="1" name="opcion" id="tijera">
    <img src="img/tijera.png" alt="Tijera"  class="col-6 imagenes">
</label>

    <div class="maquina centrado" >
        <img src="" alt="respuesta maquina" id="respuestaMaquina" class="col-6 imagenes">
    </div>

    <div class="contenedor2 col-4">
          <p class="centrado" id="mensaje"></p>
          <h2 id="contador" class="centrado"></h2>
          <div class="cajaFlex col-12 botones">
            <botton class="boton" id="nuevaP">Iniciar nueva partida</botton>
            <botton class="boton" id="salir">Salir de partida</botton>
        </div>
    </div>
        </div>
            <marquee direction="up"width="100%"
                     height="500"
                     class="marquesina col-12" ><img src="img/carita-triste.png" alt="Carita triste"></marquee>
</div>



</body>
</html>