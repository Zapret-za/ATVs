<?php
$phone=$_POST['phone'];
$phone =htmlspecialchars($phone);
$phone=urldecode($phone);
$phone=trim($phone);
if(mail("russsa45674@gmail.com",
        "Нове повідомлення з сайта ATVs",
        "Телефон: " .$phone."\n".
        "From:russsa45674@gmail.com")
){
echo ('Повідомлення відправлено');
}else{
    echo('Ошибка введення');
}

$pattern = "~^(\(\+)?\b(8|38)?([0]{1})([0-9]{9})+$~";
$tl = $_POST['my-form'] ;  // номер з форми
if(!preg_match($pattern, $tl)) { 

$error = 'Напишите правельный номен';
  
 }

?>