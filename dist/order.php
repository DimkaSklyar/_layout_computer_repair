<?php 
if($_POST) 
{ 
$to = "example@example.ru"; //куда отправлять письмо 
$subject = 'Заказ'; //тема 
$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Заказ!</i> </span><br><br> 
Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name'].'</span><br> 
Телефон: <span style="font-weight:bold;color:#000;">'.$_POST['phone'].'</span><br>
Телефон: <span style="font-weight:bold;color:#000;">'.$_POST['usluga'].'</span><br>
Сообщение: <span style="font-weight:bold;color:#000;">'.$_POST['comment'].'</span><br>'; 
$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: info@my-site.ru\r\n"; // от кого, придумайте ящик или укажите почту своего сайта. 
$result = mail($to, $subject, $message, $headers); 

if ($result){ 
echo "<p style='text-transform: uppercase; 
text-transform: uppercase;
font-size: 1em;
background-color: #ffffff;
font-weight: 700;
padding: .4em;
box-shadow: 0 19px 49px 0px rgba(81,74,48,0.3);
text-align: center;
margin-top: 10px;
'>Заказ принят, ожидайте звонка.</p>"; 
} 
} 
?>