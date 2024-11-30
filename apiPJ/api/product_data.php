<?php
    include('../config.db.php');
    $table = "CREATE TABLE productdata(
    id int(6) AUTO_INCREMENT COMMENT 'รหัสสินค้า',
    name varchar(20) COMMENT 'ชื่อสินค้า' ,
    price varchar(20) COMMENT 'ราคาสินค้า' ,
    detail varchar(255) COMMENT 'รายละเอียดสินค้า' ,
    created_at TIMESTAMP NOT  NULL COMMENT 'วันที่ทำรายการ' ,
    PRIMARY KEY(id)
    )";
    
    if($conn ->query($table ) === TRUE) {
    echo "เสร็จสิ้น";
    }else{
    echo "เกิดข้อผิดพลาด" .$conn ->error;
    };

    $conn ->close();//ปิดการเชื่อต่อฐานข้อมูล