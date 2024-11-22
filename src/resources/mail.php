<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Заявка";
$file = $_FILES['file'];

$c = true;
// Формирование самого письма
$title = "Заявка с сайта Beauty Paradise";
$body = ""; // Объявляем переменную вне цикла

foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
        $body .= "
        <tr style='background-color: #f9f9f9;'>
            <td style='padding: 10px; border: 1px solid #ddd; color: #666;'><strong>$key</strong></td>
            <td style='padding: 10px; border: 1px solid #ddd; color: #333;'>$value</td>
        </tr>
        ";
    }
}

// Формируем полное письмо
$body = "
<div style='font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;'>
  <div style='background-color: #f4f4f4; padding: 20px; text-align: center; border-bottom: 4px solid #d43f3a;'>
    <h2 style='margin: 0; font-size: 24px; color: #d43f3a;'>Новое обращение с сайта <span style='color: #000;'>Beauty Paradise</span></h2>
  </div>
  <div style='padding: 20px;'>
    <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
      <thead>
        <tr style='background-color: #f9f9f9;'>
          <th style='padding: 10px; border: 1px solid #ddd; text-align: left; color: #555; font-weight: bold;'>Поле</th>
          <th style='padding: 10px; border: 1px solid #ddd; text-align: left; color: #555; font-weight: bold;'>Значение</th>
        </tr>
      </thead>
      <tbody>
        $body
      </tbody>
    </table>
  </div>
</div>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'beauty.paradise.00@bk.ru'; // Логин на почте
  $mail->Password   = '81qkCmtfN53vpKDFQaM7'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('beauty.paradise.00@bk.ru', 'Paradise'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('paradisebeaut@yandex.ru');
  $mail->addAddress('sargisovsako@gmail.com');

  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
      $filename = $file['name'][$ct];
      if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
          $mail->addAttachment($uploadfile, $filename);
          $rfile[] = "Файл $filename прикреплён";
      } else {
          $rfile[] = "Не удалось прикрепить файл $filename";
      }
    }
  }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
