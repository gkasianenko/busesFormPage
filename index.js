$(document).ready(function(){
	
	//FORM VALIDATE
	$('#form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			name: {
				required: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			name: {
				required: 'Введите тему сообщения'
			},
			phone: {
				required: 'Введите текстсообщения'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	})


	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $("#form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос

       
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно

           
			success: function (html) {
				$('#answer').html(html);

				setTimeout(function(){
					document.querySelector(".success-message").classList.add("visuallyhidden");
				},4000);
                

                
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}

})