<?php 
    include 'get.php';
    $db = conexionMongo('MiDecsai');

    $coleccion = $db->G_Usuarios;
    
    if(isset($_GET["_id"])){
        
        $usuarios = array('_id' => $_GET["_id"]);
        
        if($coleccion->deleteOne($usuarios)){
            header('Location: gestion_usuarios.php');
            echo "Plazo eliminado";
        }
        else{
            echo "Ha ocurrido un error";
        }
    }
    else
        echo "Ha ocurrido un error";
?>


<!DOCTYPE html>
<html>
    <head>
        <title>Eliminar Plazo</title>
    </head>
</html>