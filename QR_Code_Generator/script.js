const input = document.getElementById('input');
const button = document.getElementById('button');
// const qr_code = document.getElementById('qr-code');

button.addEventListener('click',()=>{
    let inputValue = input.value;
    let qrCode;
    if(qrCode == null) {
        qrCode = generateQrCode(inputValue)
    } else {
        qrCode.makeCode(inputValue);
    }
})

function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
      text: qrContent,
      width: 180,
      height: 180,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }