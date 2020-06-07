var calTitle = document.getElementById('app-title');
var calendarBody = document.getElementById('calendar-body');
//var today = new Date(2020,6,3);
//var first = new Date(today.getFullYear(), today.getMonth(),1); //(오늘 연도, 오늘 월, 1)
var monthList = ['01','02','03','04','05','06','07','08','09','10','11','12'];
var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31]; //윤년일때 각 달의 마지막 날
var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31]; //평년일때 각 달의 마지막 날

function showCalendar(year, month){
    first = new Date(year, month, 1);
    var pageYear;
    if(first.getFullYear() % 4 === 0){
        pageYear = leapYear;
    } else{
        pageYear = notLeapYear;
    }
    calTitle.innerHTML = year +"-"+ monthList[month]
    console.log(first.getFullYear(), first.getMonth(), first.getDate())
    console.log(pageYear[first.getMonth()-1])
    let monthCnt = 100;
    let cnt = 1;
    for(var weeks_cnt = 0; weeks_cnt < 6; weeks_cnt++){ //최대 6주까지 있으므로 6번 반복
        if(cnt < pageYear[first.getMonth()-1]) { //해당 월의 모든 날짜가 모두 출력되지않았으면 새로운 주 만들기
            var $tr = document.createElement('tr'); //한 주에 해당하는 새로운 행 만들기
            $tr.setAttribute('id', monthCnt);  
        } else{
            break
        }
        console.log(first.getDay())
        for(var weekdays_cnt = 0; weekdays_cnt < 7; weekdays_cnt++){ //한 주에 7일
            if((weeks_cnt === 0 && weekdays_cnt < first.getDay())){                 // 만들어진 첫주이고 만들어진 요일 < first 일자의 요일--> 첫주일 때 시작하는 요일부터 출력 
                var $td = document.createElement('td'); 
                $td.setAttribute('id', 'no_id');
                $tr.appendChild($td); 
            } else if(cnt > pageYear[first.getMonth()]) {  // 만들어진 전체 일자>해당 월의 마지막 날) --> 마지막날까지 출력하고 나머지는 빈칸출력
                var $td = document.createElement('td'); 
                $td.setAttribute('id', 'no_id');
                $tr.appendChild($td); 
            } 
            else{
                var $td = document.createElement('td');
                $td.textContent = cnt; 
                $td.setAttribute('id', cnt); 
                $tr.appendChild($td); 
                cnt++; 
            }
        }
        monthCnt++;
        calendarBody.appendChild($tr); //calenderBody에 만든 주 append
    }
}

showCalendar(2020,5);