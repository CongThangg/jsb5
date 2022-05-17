// Tính tiền điện
const GIA50KW_DAU = 500;
const GIAKW50_100 = 650;
const GIAKW100_200 = 850;
const GIAKW200_350 = 1100;
const GIAKWTREN_350 = 1300;

function tinhTienDien() {
    var hoTen = document.getElementById("inputhoTen2").value;
    var soKw = Number(document.getElementById("inputsoKw").value);
    
    var tienDien = soTienTrenKw(soKw);

    document.getElementById("txtResult2").innerHTML =
        "Khách hàng : " +
        hoTen +
        "<br>" +
        "Số tiền điện là : " +
        tienDien.toLocaleString() +
        " VNĐ";
}

function soTienTrenKw(soKw) {
    if (0 < soKw && soKw <= 50) {
        return soKw * GIA50KW_DAU;
    } else if (50 < soKw && soKw <= 100) {
        return 25000 + (soKw - 50) * GIAKW50_100;
    } else if (100 < soKw && soKw <= 200) {
        return 57500 + (soKw - 100) * GIAKW100_200;
    } else if (200 < soKw && soKw <= 350) {
        return 142500 + (soKw - 200) * GIAKW200_350;
    } else if (350 < soKw) {
        return 307500 + (soKw - 350) * GIAKWTREN_350;
    } else {
        alert("Số Kw không hợp lệ");
    }
}

document.getElementById("btnCalc2").onclick = tinhTienDien;
