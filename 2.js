//20.
exN(20)
function printLength(s){
    document.write(s.length)
}

printLength("ვაჟა-ფშაველას გამზირი")

//21.
exN(21)
function countA(s){
    var count=0
    for(let c of s){
        if(c=='a'){
            count++
        }
    }
    document.write(count)
}

countA("Nikas hyavda 5 cxvari")

//22.
exN(22)
function countSub(s,sub){
    var arr = s.split(sub)
    return arr.length-1
}

document.write(countSub("ნიანგი ჭამს ნიანგს თავისი ნიანგის პირით","ნიანგ"))

//23.
exN(23)
function stringCodes(s){
    for(let i=0;i<s.length;i++){
        document.write(s.charCodeAt(i)+"&emsp;")
    }
}

stringCodes("Codes for ამ ტექსტის 192 !743&3")

//24.
exN(24)
function word40(){
    var s = ""
    for(let i=0;i<40;i++){
        var x;
        do{
            var x = Math.round(Math.random()*65519)
        }
        while(!isGraphic(x))
        s += String.fromCharCode(x)
    }
    return s
}
function isGraphic(x){
    return x>32&&(x<127||x>160&&x<8192&&x!=5760&&x!=6158||x>8205&&x!=8232&&x!=8233&&x!=8239&&x!=8289&&x!=12288&&x!=8288&&x!=65279)
}

document.write(word40())

//25.
exN(25)
function wordN(n){
    var s = ""
    for(let i=0;i<n;i++){
        var x;
        do{
            var x = Math.round(Math.random()*65519)
        }while(!isGraphic(x))
        s += String.fromCharCode(x)
    }
    return s
}

document.write(wordN(125))

//26.
exN(26)
function wordN20(n){
    var s = ""
    s += wordN(n)
    for(let i=1;i<20;i++){
        s += "&ensp;"+wordN(n)
    }
    return s
}

document.write(wordN20(8))

//27.
exN(27)
function wordMNK(m,n,k){
    var s = ""
    var y = Math.round(Math.random()*(n-m)+m)
    s += wordN(y)
    for(let i=1;i<k;i++){
        y = Math.round(Math.random()*(n-m)+m)
        s += "&ensp;"+wordN(y)
    }
    return s
}

document.write(wordMNK(2,8,9))

//28.
exN(28)
//აბრუნებს მასივიდან რამდენი სიტყვა მოიძებნა სტრიქონში
function findWordsInS(s,arr){
    var count=0
    for(let w of arr){
        if(s.indexOf(w)!=-1){
            count++
        }
    }
    return count
}

document.write(findWordsInS("გველი და ნიანგი, მდინარე, ცეცხლი, ფოთოლი, ყვითელი, მწვანე, ლურჯი",["მწვანე","ხე","დოლი","გარმონი","გველი","ლურჯი","ცეცხლი","რკინა"]))

//29.
exN(29)
function censorString(s,arr){
    for(let w of arr){
        s = s.replace(new RegExp(w,'g'),'*'.repeat(w.length))
    }
    return s
}

document.write(censorString("გველი და ნიანგი, გველი და ხარი, წყალი და ბოროტი, ხარი და გველი, გველი და კიტრი",["ხარი","ბოროტი","გველი"]))

//30.
exN(30)
function uniqueString(s){
    var chars = []
    var nums = []
    while(s.length>0){
        let c = s[0]
        chars.push(c)
        nums.push(s.split(c).length-1)
        s = s.replace(new RegExp(c,'g'),'')
    }
    for(let i=0;i<chars.length;i++){
        s += chars[i]
        console.log(chars[i]+" "+nums[i])
    }
    return s
}

document.write(uniqueString("გველი და ნიანგი ჩხუბობენ ჩურჩხელას გამო"))

//31.
exN(31)
function checkTextForm(){
    function valid(x,n){
        return x.length>0&&Number.isInteger(parseFloat(x))&&x>=n
    }
    var m = document.getElementById("m").value
    if(valid(m,0)){
        var n = document.getElementById("n").value
        if(valid(n,Math.max(m,1))){
            var k = document.getElementById("k").value
            if(valid(k,0)){
                var l = document.getElementById("l").value
                if(valid(l,Math.max(k,1))){
                    var p = document.getElementById("p").value
                    if(valid(p,1)){
                        var lang = document.getElementById("lang").value
                        createRandomText(m,n,k,l,p,lang)
                    }else{
                        alert("აბზაცების რაოდენობა არაა ვალიდური")
                    }
                }else{
                    alert("აბზაცში სიტყვების მაქსიმალური რაოდენობა არაა ვალიდური")
                }
            }else{
                alert("აბზაცში სიტყვების მინიმალური რაოდენობა არაა ვალიდური")
            }
        }else{
            alert("სიტყვებში სიმბოლოების მაქსიმალური რაოდენობა არაა ვალიდური")
        }
    }else{
        alert("სიტყვებში სიმბოლოების მინიმალური რაოდენობა არაა ვალიდური")
    }
}
function createRandomText(m,n,k,l,p,lang){
    var s = ""
    for(let i=0;i<p;i++){
        s += createLine(parseInt(m),parseInt(n),parseInt(k),parseInt(l),lang)+"&#10;"
    }
    var out = document.getElementById("31")
    out.innerHTML = ""
    out.innerHTML = s
}
function createLine(m,n,k,l,lang){
    var s = ""
    var y = Math.round(Math.random()*(l-k)+k)
    for(let i=0;i<y;i++){
        s += createWord(parseInt(m),parseInt(n),lang,i)+"&ensp;"
    }
    return s
}
function createWord(m,n,lang,index){
    var s = ""
    var y = Math.round(Math.random()*(n-m)+m)
    switch(lang){
        case "LAT":
            for(let i=0;i<y;i++){
                s += latChar(index,i)
            }
            break
        case "GEO":
            for(let i=0;i<y;i++){
                s += geoChar()
            }
            break
        case "CYR":
            for(let i=0;i<y;i++){
                s += cyrChar(index,i)
            }
            break
    }
    return s    
}
function latChar(index,i){
    if(index==0&&i==0){
        return latUpper()
    }
    if(i==0){
        if(Math.random()>0.2){
            return latLower()
        }
        return latUpper()
    }
    return latLower()
    function latUpper(){
        var x = Math.round(Math.random()*25+65)
        return String.fromCharCode(x)
    }
    function latLower(){
        var x = Math.round(Math.random()*25+97)
        return String.fromCharCode(x)
    }
}
function geoChar(){
    var x = Math.round(Math.random()*32+4304)
    return String.fromCharCode(x)
}
function cyrChar(index, i){
    if(index==0&&i==0){
        return cyrUpper()
    }
    if(i==0){
        if(Math.random()>0.2){
            return cyrLower()
        }
        return cyrUpper()
    }
    return cyrLower()
    function cyrUpper(){
        if(Math.random()>1/33){
            var x = Math.round(Math.random()*32+1040)
        }else{
            var x = 1025
        }
        return String.fromCharCode(x)
    }
    function cyrLower(){
        if(Math.random()>1/33){
            var x = Math.round(Math.random()*32+1072)
        }else{
            var x = 1105
        }
        return String.fromCharCode(x)
    }
}