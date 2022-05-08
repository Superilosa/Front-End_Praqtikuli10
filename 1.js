function exN(n){
    document.write('<br><div class="line">'+n+'</div><br>')
}

//1.
exN(1);
function roundUp(n){
    return Math.ceil(n);
}

document.write(roundUp(13.2))

//2.
exN(2);
function roundDown(n){
    return Math.floor(n);
}

document.write(roundDown(19.8));

//3.
exN(3);
function roundClosest(n){
    return Math.round(n);
}

document.write(roundClosest(14.6));

//4.
exN(4);
function roundIf(n, x){
    if(x){
        return Math.ceil(n);
    }
    return Math.floor(n);
}

document.write(roundIf(14.234,true));

//5.
exN(5);
function randomZ(){
    document.write(Math.random());
}

randomZ();

//6.
exN(6);
function random5(){
    document.write(Math.random()*45+5);
}

random5();

//7.
exN(7)
function randomAB(a,b){
    document.write(Math.random()*(b-a)+a)
}

randomAB(15,28)

//8.
exN(8)
function randomNAB(a,b){
    document.write(Math.round(Math.random()*(b-a)+a))
}

randomNAB(4,19)

//9.
exN(9)
function random10NAB(a,b){
    for(let i=0;i<10;i++){
        document.write((Math.round(Math.random()*(b-a)+a))+"&emsp;")
    }
}

random10NAB(9,15)

//10.
exN(10)
function randomNNAB(n,a,b){
    for(let i=0;i<n;i++){
        document.write((Math.round(Math.random()*(b-a)+a))+"&emsp;")
    }
}

randomNNAB(8,203,490)

//11.
exN(11)
function randomWD(){
    var d=["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]
    document.write(d[Math.round(Math.random()*6)])
}

randomWD()

//12.
exN(12)
function randomImg(){
    document.write('<img src="images/'+Math.round(Math.random()*9)+'.jfif" alt="random image">')
}

randomImg()

//13.
exN(13)
function random4Img(){
    for(let i=0;i<4;i++){
        document.write('<img src="images/'+Math.round(Math.random()*19)+'.jfif" alt="random image">')
    }
}

random4Img()

//14.
exN(14)
function randomWDImg(){
    randomWD()
    randomImg()
}

randomWDImg()

//15.
exN(15)
function randomWDImg5(){
    randomWD()
    document.write('<img src="images/'+Math.round(Math.random()*4)+'.jfif" alt="random image">')
}

randomWDImg5()

//16.
exN(16)
function randomMD(m){
    var x
    switch(m){
        case "იანვარი":
        case "მარტი":
        case "მაისი":
        case "ივლისი":
        case "აგვისტო":
        case "ოქტომბერი":
        case "დეკემბერი":
            x = 30
            break
        case "აპრილი":
        case "ივნისი":
        case "სექტემბერი":
        case "ნოემბერი":
            x = 29
            break
        case "თებერვალი":
            x=27
            break
        default:
            alert("თვე არაა ვალიდური")
    }
    document.write(Math.round(Math.random()*x)+1)
}

randomMD("აპრილი")

//17.
exN(17)
function randomMDImg(m){
    randomMD(m)
    randomImg()
}

randomMDImg("დეკემბერი")

//18.
exN(18)
function imgTable(){
    var div = document.getElementById("18")
    var table = document.createElement("table")
    for(let i=0;i<3;i++){
        var tr = document.createElement("tr")
        for(let j=0;j<4;j++){
            var td = document.createElement("td")
            var img = document.createElement("img")
            img.src = "images/"+Math.round(Math.random()*19)+".jfif"
            img.alt = "random image"
            td.appendChild(img)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    div.appendChild(table)
}

//19.
function checkTableImgs(){
    var row = document.getElementById("row").value
    if(row.length>0&&Number.isInteger(parseFloat(row))&&row>=0){
        var col = document.getElementById("col").value
        if(col.length>0&&Number.isInteger(parseFloat(col))&&col>=0){
            var img = document.getElementById("img").value
            if(img.length>0&&Number.isInteger(parseFloat(img))&&img>=0){
                tableImgs(row,col,img)
            }else{
                alert("ფოტოების რაოდენობა არაა ვალიდური")
            }
        }else{
            alert("სვეტების რაოდენობა არაა ვალიდური")
        }
    }else{
        alert("სტრიქონების რაოდენობა არაა ვალიდური")
    }
}
function tableImgs(row,col,imgN){
    var div = document.getElementById("19")
    div.innerHTML = ""
    var table = document.createElement("table")
    var k = 0
    for(let i=0;i<row;i++){
        var tr = document.createElement("tr")
        for(let j=0;j<col;j++){
            var td = document.createElement("td")
            if(k<imgN){
                var img = document.createElement("img")
                img.src = "images/"+Math.round(Math.random()*19)+".jfif"
                img.alt = "random image"
                td.appendChild(img)
                k++
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    div.appendChild(table)
}