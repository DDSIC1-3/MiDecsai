<?php 
    include 'get.php';
    $db = conexionMongo('MiDecsai');

    if(isset($_GET["dni"])){
        $usuarios = $db->G_Usuarios->findOne(array('_id' => $_GET["dni"]));
    }
    else
        echo "Ha ocurrido un error";
        
?>
<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Modificar Usuarios</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kaushan+Script">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700">
        <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
        <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
        <link rel="stylesheet" href="assets/css/Contact-Form-Clean.css">
        <link rel="stylesheet" href="assets/css/Footer-Dark.css">
        <link rel="stylesheet" href="assets/css/Login-Form-Dark.css">

        <script>
            function completarValues(){
                document.getElementsByName("dni")[0].value='<?php if(isset($usuarios->_id)) echo $usuarios->_id ?>';
                document.getElementsByName("correo")[0].value='<?php if(isset($usuarios->correo)) echo $usuarios->correo ?>';
                document.getElementsByName("fecha_alta")[0].value='<?php if(isset($usuarios->fecha_alta)) echo $usuarios->fecha_alta ?>';
                
            };
        </script>
    </head>
<body onload="completarValues()";>
<main>
    <form action="modify.php" method="post" id="modificar_usuario" style="width: 800px;min-width: 600px;margin: auto;background-color: #f2f2f2;padding: 50px;padding-bottom: 38px;padding-top: 44px;margin-top: 40px;">
        <div class="container d-flex">
            <h1 class="d-xl-flex justify-content-xl-center" style="margin-bottom: 22px;width: 80%;font-size: 35px;margin-left: 15px;margin-top: 21px;">Modificar Datos Personales</h1>
            <img src="assets/img/Contacto.png" width="100px" height="100px">
        </div>
        <div class="container text-left d-xl-flex justify-content-sm-end justify-content-md-around align-items-xl-center" style="height: 100%;width: 100%;margin-top: 16px;margin-bottom: 8px;padding-left: 0px;">
            <div class="form-group" style="margin: auto;margin-bottom: 0px;width: 40%;">
                <label>DNI</label><input class="form-control" type="text" name="dni" >
            </div>
            <div class="form-group" style="margin: auto;margin-bottom: 0px;width: 40%;">
                <label>Correo</label><input class="form-control" type="email" name="correo">
            </div>
        </div>
       
        <div class="form-group"
                style="margin: auto;height: 30%;width:90%;"><label>Fecha Entrada Departamento</label>
                <input class="form-control" type="date" name="fecha_alta" readonly="">
            </div>
        </div>
    
       
        <div class="form-group d-xl-flex justify-content-xl-center" style="width: 40%;margin: auto;">
            <button button class="btn" type="submit" name="modify_user" value="enviar" style="background-color: #282828;font-weight: normal;color: #ffffff;margin-top: 9px;padding-bottom: 6px;">Guardar</button>
        </div>
    </form>
</main>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
<script src="assets/js/agency.js"></script>
</body>

</html>