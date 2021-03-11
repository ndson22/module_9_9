//Bai 1
document.getElementById("checkMod").addEventListener("click",function (){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    if(num1 % num2 == 0){
        alert("Số thứ nhất chia hết cho số thứ hai");
    }
    else alert("Số thứ nhất không chia hết cho số thứ hai");
})
//Bai 2
    document.getElementById("checkAge").addEventListener("click",function (){
        let age = parseInt(document.getElementById("age").value);
        if(age>=16){
            document.getElementById("resultAge").innerHTML = "Bạn đủ điều kiện vào lớp 10"

        }
        else document.getElementById("resultAge").innerHTML = "Bạn không điều kiện vào lớp 10"
    })
//Bài 3
    document.getElementById("checkItg").addEventListener("click",function (){
        let num = Math.round(document.getElementById("numItg").value);
        if(num>0){
            document.getElementById("resultItg").innerHTML = "Số bạn nhập lớn hơn 0"
        }
        else if(num<0)
        {
            document.getElementById("resultItg").innerHTML = "Số bạn nhập nhỏ hơn 0"
        }
        else document.getElementById("resultItg").innerHTML = "Số bạn nhập bằng 0"
    })

// Bai 4
    document.getElementById("checkMax").addEventListener("click",function (){
        let num1 = parseInt(document.getElementById("so1").value);
        let num2 = parseInt(document.getElementById("so2").value);
        let num3 = parseInt(document.getElementById("so3").value);
        console.log(num1)
        console.log(num2)
        console.log(num3)
        var max;
        if(num1>num2){
            {if(num1>num3){
                max = num1;
                console.log(max);
            }
            else {max = num3};}
        }
        else
        {if(num2>num3){
                max = num2;
        }
        else max = num3;
        }
        document.getElementById("resultMax").innerHTML = "Số lớn nhất là số " + max;

    })

//Bai 5
    document.getElementById("checkRank").addEventListener('click' , checkRank);
    function checkRank(){
        let diemGiuaKy = parseFloat(document.getElementById("diemGiuaKy").value);
        console.log(diemGiuaKy)
        let diemCuoiKy = parseFloat(document.getElementById("diemCuoiKy").value);
        console.log(diemCuoiKy)
        let diemTB = (diemGiuaKy*2+diemCuoiKy*3)/5;
        console.log(diemTB)
        let xepLoai = null;
        if (diemTB >=8){
            xepLoai = "Gioi";
        }
        else if(diemTB>=7&&diemTB<8)
        {
            xepLoai = "Kha";
        }
        else xepLoai = "TB";
        document.getElementById("kqXepLoai").innerHTML = 'Diem trung binh cua ban la ' + diemTB +  ' ' + 'Xep loai:' + xepLoai;

    }

    // Bai 6
    function tinhds() {
        let doanhSo = parseInt(document.getElementById('doanhSo').value);
        let hoaHong = null;
        if (doanhSo >= 1000) {
            hoaHong = 1;
        } else if (doanhSo < 1000 && doanhSo > 500) {
            hoaHong = 0.5;
        } else hoaHong = 0.2;

        document.getElementById('kqHoaHong').innerHTML = "Số hoa hồng của bạn là: " + " " + hoaHong;
    }
// bai 7

    function calMoney2(){
        let minute = parseFloat(document.getElementById('minutes').value);
        let soCuoc = minute*500;
        if(minute>1000){
            soCuoc*=0.9;
        }
        else if(minute>=500&&minute<=1000){
            soCuoc*=0.95;
        }
        document.getElementById('money').innerHTML = "Số cước của bạn là: " + ' ' + soCuoc;
    }