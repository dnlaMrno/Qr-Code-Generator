const imgBox = document.querySelector(".imgBox");
const qrText = document.getElementById("qrText");
const qrImg = document.getElementById("qrImg");
const btnQr = document.querySelector(".generatorQr");


function generateQr () {
    if(qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  qrText.value;
            imgBox.classList.add('show-img');
    }else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

btnQr.addEventListener('click', () =>{
    generateQr()
})