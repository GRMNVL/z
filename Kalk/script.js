// переменные
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// onclick всем операциям
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Получаем значения ввода и кнопки
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Значения (btnValue) к входной строке и функция eval javascript для получения результата
		// Если нажата клавиша очистки, сотрет все
		if(btnVal == 'Del') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// Если нажата клавиша =l, вычисляет и выдаст результат
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// чужой код Проверка на тот случай, если больше одного знака полсле запятой
		else if(operators.indexOf(btnVal) > -1) {
			
			// Получаем последний символ
			var lastChar = inputVal[inputVal.length - 1];
			
			// Добавляет оператор только в том случае, если входные данные не пусты и в последнем поле нет оператора
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Разрешает "—". если строка пуста
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			//Последний оператор (если он существует) заменяет новым нажатым оператором
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Здесь '.' соответствует любому символу, в то время как $ обозначает конец строки, поэтому все (в данном случае это будет оператор) в конце строки будет заменено новым оператором
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Теперь осталась только проблема с десятичной дробью. Мы можем легко решить ее, используя флаг "decimalAdded", который мы установим после добавления десятичной дроби и предотвратим добавление большего количества десятичных знаков после его установки. Он будет сброшен при нажатии клавиши operator, eval или clear.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// после нажатия на клавижу просто она появитсяы
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}