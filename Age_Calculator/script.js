const input = document.getElementById('input');
const button = document.getElementById('button');
const box = document.querySelector('.result')

button.addEventListener('click',(e)=> {
    e.preventDefault();
    const date = new Date(input.value);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    const arr = calculateAge(year,++month,day);
    document.getElementById('year').innerHTML = arr.years; 
    document.getElementById('month').innerHTML = arr.months; 
    document.getElementById('day').innerHTML = arr.days; 
})

const calculateAge = (requiredYear, requiredMonth, requiredDay) => {
    var todayDate = new Date();
    var currentDay = todayDate.getDate();
    var currentMonth = todayDate.getMonth();
    var correctedCurrentMonth = ++currentMonth;
    var currentYear = todayDate.getFullYear();
    let days,months,years;

    if(currentDay > requiredDay) { days = currentDay - requiredDay }
    else{
        if((correctedCurrentMonth) <= 7 && (correctedCurrentMonth)%2 != 0) {
            if(correctedCurrentMonth === 3 && currentYear%4 === 0) {
                days = (currentDay + 29) - requiredDay;
                currentMonth--;
            } else if(correctedCurrentMonth === 3 && currentYear%4 != 0) {
                days = (currentDay + 28) - requiredDay;
                currentMonth--;
            } else {
                days = (currentDay+30) - requiredDay
                currentMonth--;
            }
        } 
        else if((correctedCurrentMonth) <= 7 && (correctedCurrentMonth)%2 == 0) {
            days = (currentDay + 31) - requiredDay;
            currentMonth--;
        }

        else if((correctedCurrentMonth) >7 && (correctedCurrentMonth)%2 == 0) {
            days = (currentDay+30) - requiredDay;
            currentMonth--;
        } 
        else if((correctedCurrentMonth) >7 && (correctedCurrentMonth)%2 != 0) {
            days = (currentDay+31) - requiredDay;
            currentMonth--;
        }
    }

    if(currentMonth >= requiredMonth ) {
        months = currentMonth - requiredMonth ;
    }
    else {
        months = (currentMonth + 12) - requiredMonth;
        currentYear--;
    }

    years = currentYear - requiredYear;
    // console.log("years : " + years +" Months : " + months + " days : " + days)
    return({years : years, months : months, days : days})
    
}
