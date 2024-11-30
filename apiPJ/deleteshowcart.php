<?php
    require_once "config.db.php";
    $dataJSON = json_decode(file_get_contents('php://input'), true);
    $message = array();

    $id = $_GET['id'];

    $delete = "DELETE FROM products WHERE `products`.`id` = '$id';";
    $qr_delete = mysqli_query($conn, $delete);

    if($qr_delete){
        http_response_code(201);
        $message['message'] = "ลบข้อมูลสำเร็จ";
    }else{
        http_response_code(422);
        $message['message'] = "ลบข้อมูลไม่สำเร็จ";
    }

    echo json_encode($message);
    echo mysqli_error($conn);

?>