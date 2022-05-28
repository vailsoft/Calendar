var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var data = new Date();
var primeiroDia = (data.getDay() + 1)

//Função para saber quantos dias tem o mês
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Selecionado o body
var body = document.getElementsByTagName('body')[0];


//Selecionador do mês do calendário
selectMonth = document.createElement('select');

// Criando os meses no select    
for (var i = 0; i < months.length; i++) {
    var option = document.createElement('option');
    option.innerText = months[i];
    selectMonth.appendChild(option);
    // Define selecionado o mês atual
    if (selectMonth.options[i].index == data.getMonth()) {
        selectMonth.selectedIndex = i;
    }
}

//Define o título do site ao carregar
document.title = months[data.getMonth()] + " " + data.getFullYear() + " Calendar";

//Seleciona o Mes atual ao carregar
body.addEventListener('load', () => {
    selectMonth.options[selectMonth.selectedIndex] = data.getMonth() + 1;
});

// Adiciona o select à pagina
body.appendChild(selectMonth);

// Selecionar o ano
var year = document.createElement('input');
year.setAttribute('type', 'number');
year.value = data.getFullYear();
year.setAttribute("min", 1922)
year.setAttribute("max", 2122)
year.setAttribute("onkeydown", "return false")
body.appendChild(year);


// Criar a div.calendar
var calendar = document.createElement('div');
calendar.setAttribute('class', 'calendar');
body.appendChild(calendar);


// Criada a div.month-indicator
var monthIndicator = document.createElement('div');
monthIndicator.setAttribute('class', 'month-indicator');
calendar.appendChild(monthIndicator);

// Criada a div.day-of-week
var dayOfWeek = document.createElement('div');
dayOfWeek.setAttribute('class', 'day-of-week');
calendar.appendChild(dayOfWeek);


// Criada a div.date-grid
var dateGrid = document.createElement('div');
dateGrid.setAttribute('class', 'date-grid');
calendar.appendChild(dateGrid);

// Populando os dias da semana
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
for (let day in daysOfWeek) {
    var daysOfWeekDiv = document.getElementsByClassName('day-of-week')[0];
    var divDay = document.createElement('div')
    divDay.setAttribute('class', 'day btn-flip');
    divDay.innerHTML = daysOfWeek[day];
    daysOfWeekDiv.appendChild(divDay)
}

// Adiciona os dias na grid
for (let i = 0; i < daysInMonth(data.getMonth() + 1, data.getFullYear()); i++) {
    var buttonDay = document.createElement('button');
    buttonDay.innerText = i + 1;
    dateGrid.appendChild(buttonDay)
}

//Define o título do site dinâmico
selectMonth.addEventListener("change", updateCalendar);
year.addEventListener("change", updateCalendar);

// Atualiza o calendário
function updateCalendar() {
    document.title = selectMonth.options[selectMonth.selectedIndex].text + " " + year.value + " Calendar";
    var p = new Date(year.value, (selectMonth.selectedIndex), 1)
    primeiroDia = (p.getDay() + 1);
    // Define a coluna que o primeiro dia vai ser inserido
    dateGrid.firstElementChild.style.cssText = "grid-column: " + primeiroDia;
}