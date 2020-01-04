$(document).ready(function() {
    $('#tbl').DataTable();
} );


function flip() {
    var body = document.getElementById("base");
    body.innerHTML = "";

    for (let i = 1; i < 11; i++) {
        var rand = Math.random();
        var tr = document.createElement("tr");
        var tbody = document.getElementById("base");
        tbody.appendChild(tr);

        for (let index = 1; index < 4; index++) {
            var td = document.createElement("td");
            switch (index) {
                case 1:
                    td.innerHTML = i;
                    break;
                case 2:
                    td.innerHTML = rand;
                    break;
                case 3:
                    if (rand < 0.5) {
                        td.innerHTML = "H";
                    }
                    else{
                        td.innerHTML = "T";
                    }
                    break;
            }
        
        var tr = document.getElementsByTagName("tr")[i];
        tr.appendChild(td);
        }
    }
    
}


function service() {
    var body = document.getElementById("base");
    body.innerHTML = "";
    var arr = [3,6,10];

    for (let i = 1; i < 26; i++) {
        var rand = arr[Math.floor(Math.random() * arr.length)];
        
        var tr = document.createElement("tr");
        var tbody = document.getElementById("base");
        tbody.appendChild(tr);
        tr.setAttribute("id","row")

        for (let index = 1; index < 3; index++) {
            var td = document.createElement("td");
            switch (index) {
                case 1:
                    td.innerHTML = i;
                    break;
                case 2:
                    td.innerHTML = rand;
                    break;
            }
            $("#base > tr:last-child").append(td);
            // var tr = document.getElementsByTagName("tr")[i];
            // tr.appendChild(td);
        }
    }
}


function Arrival() {
    var body = document.getElementById("base");
    body.innerHTML = "";
    var arr = [1,2,3,4];
    var temp = 0;

    for (let i = 1; i < 26; i++) {
        if (i == 1) {
            var rand = 0;
        }
        else
        {
            var rand = arr[Math.floor(Math.random() * arr.length)];
        }
        
        var tr = document.createElement("tr");
        var tbody = document.getElementById("base");
        tbody.appendChild(tr);
        tr.setAttribute("id","row")
        temp += rand;

        for (let index = 1; index < 4; index++) {
            var td = document.createElement("td");
            switch (index) {
                case 1:
                    td.innerHTML = i;
                    break;
                case 2:
                    td.innerHTML = rand;
                    break;
                case 3:
                    td.innerHTML = temp ;
                    break;
            }
            $("#base > tr:last-child").append(td);
        }
    }
}


function TossGame() {
    var body = document.getElementById("base");
    body.innerHTML = "";
    var arr = ["T","H"];
    var temp = 0;

    for (let i = 1; i < 101; i++) {

        var Harry = arr[Math.floor(Math.random() * arr.length)];
        var Tom = arr[Math.floor(Math.random() * arr.length)];

        var tr = document.createElement("tr");
        var tbody = document.getElementById("base");
        tbody.appendChild(tr);
        tr.setAttribute("id","row")

        for (let index = 1; index < 4; index++) {
            var td = document.createElement("td");
            switch (index) {
                case 1:
                    td.innerHTML = i;
                    break;
                case 2:
                    td.innerHTML = Harry;
                    break;
                case 3:
                    if (Harry == "H" && Tom != "T") {
                        td.innerHTML = 1 ; 
                    }
                    else if(Harry == "H" && Tom == "T")
                    {
                        td.innerHTML = 0 ;
                    }
                    else if(Harry != "H" && Tom != "T")
                    {
                        td.innerHTML = 0 ;
                    }
                    else{
                        td.innerHTML = -1 ;
                    }
                    break;
            }
            $("#base > tr:last-child").append(td);
        }
    }
}