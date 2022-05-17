// Tính Tiền Cáp

const ND_HOADON = 4.5;
const ND_DICHVU_COBAN = 20.5;
const ND_KENH_CAOCAP = 7.5;

const DN_HOADON = 15;
const DN_DICHVU_COBAN = 75;
const DN_KENH_CAOCAP = 50;
const DN_SOKETNOI = 5;

function tinhTienCap(){

  var maKH = Number(document.getElementById('inputmaKH').value);
  var soKenhCC = Number(document.getElementById('inputsoKenhCC').value);
  var loaiKhach = document.getElementById('selectloaiKhach').value;
  var soKetNoi = Number(document.getElementById('inputsoKN').value);

  var tienCap = tinhPhi(soKenhCC, loaiKhach, soKetNoi);
  
  document.getElementById('txtResult4').innerHTML = 'Mã khách hàng : ' + maKH + '<br>' + 'Tiền Cáp là : $' +  tienCap.toFixed(2);
}

function tinhPhi(soKenhCC, loaiKhach, soKetNoi, tienKN){
  
  if(loaiKhach == 'nhaDan'){
    return ND_HOADON + ND_DICHVU_COBAN + (soKenhCC * ND_KENH_CAOCAP);
  }else if(loaiKhach == 'doanhNghiep'){
    var tienKN = soKetNoi > 10 ? (soKetNoi - 10) * 5 : soKetNoi * 0;
    return DN_HOADON + DN_DICHVU_COBAN + (soKenhCC * DN_KENH_CAOCAP) + tienKN;
  }else{
    console.log('Loại khách chưa xác định');
    return 0;
  }
}

function disabledInput(){
  if(document.getElementById('selectloaiKhach').value == 'nhaDan'){
    document.getElementById('inputsoKN').disabled = true;
  }else{
    document.getElementById('inputsoKN').disabled = false;
  }
}

document.getElementById('btnCalc4').onclick = tinhTienCap;


