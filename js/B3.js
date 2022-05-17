// Tính thu nhập cá nhân
const THUE0_60 = 0.05;
const THUE60_120 = 0.1;
const THUE120_210 = 0.15;
const THUE210_384 = 0.2;
const THUE384_624 = 0.25;
const THUE624_960 = 0.3;
const THUETREN960 = 0.35;

function tinhThueCaNhan(){
  var hoTen = document.getElementById('inputhoTen3').value;
  var tongThuNhap = Number(document.getElementById('inputtongThuNhap').value);
  var phuThuoc = Number(document.getElementById('inputphuThuoc').value);

  var thuNhap = tongThuNhap - 4e+6 - (phuThuoc * 1.6e+6);

  var tienThue = mucThueThuNhap(thuNhap);
  document.getElementById('txtResult3').innerHTML = 'Họ tên : ' + hoTen + '<br>' + 'Tiền thuế phải đóng là : ' + tienThue.toLocaleString() + ' VNĐ';
}

function mucThueThuNhap(thuNhap){
  if(0 < thuNhap && thuNhap <= 60e+6){
    return thuNhap * THUE0_60;
  }else if(60e+6 < thuNhap && thuNhap <= 120e+6){
    return thuNhap * THUE60_120;
  }else if(120e+6 < thuNhap && thuNhap <= 210e+6){
    return thuNhap * THUE120_210;
  }else if(210e+6 < thuNhap && thuNhap <= 384e+6){
    return thuNhap * THUE210_384;
  }else if(384e+6 < thuNhap && thuNhap <= 624e+6){
    return thuNhap * THUE384_624;
  }else if(624e+6 < thuNhap && thuNhap <= 960e+6){
    return thuNhap * THUE624_960;
  }else if(960e+6 < thuNhap){
    return thuNhap * THUETREN960;
  }else{
    
  }
}
document.getElementById('btnCalc3').onclick = tinhThueCaNhan;

