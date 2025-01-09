// 1. The NewYear function:
function TetHoliday() {
    const tetDate = new Date(2025,0,29);
    const currentDate = new Date();
    // trả về mili giâygiây
    const remainigTime = tetDate - currentDate;

    //get days: lấy thời gian còn lại chia cho số mili giây trong 1 ngày và làm trong bằng hàm floor làm trong xuống số nguyên thấp nhất 11.9 => 11
    const days = Math.floor(remainigTime / 86400000);

    // remainig hour
    // đổi ngày sang mili giây: nhân số ngày vs số mili giây trong 1 ngày
    // đổi giây sang mili giây, phút => giây, giờ => phút , ngày => giờ
    // trả về số mili giây còn lại sau khi trừ đi số ngày
    const remainigHr = remainigTime - days * 1000 * 60 * 60 * 24;
    //(mili giây còn lại sau khi trừ 10 ngày)
    // số mili giây trog 1 giờ: 1h=60p*60s*1000 mili s
    const hours = Math.floor(remainigHr / 3600000)
    // số h còn lại sau khi trừ đi số ngày
    

    // remaining Minute
    const remainigMin = remainigTime - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60;
    const minutes = Math.floor(remainigMin/60000);

    // remaining secong
    const remainigSec = remainigTime - days * 1000 * 60 * 60 * 24 
    - hours * 1000 * 60 * 60 - minutes * 1000 * 60;
    const seconds = Math.floor(remainigSec/1000);



    const containerDay = document.querySelector('.cont-days');
    const containerHour = document.querySelector('.cont-hour');
    const containerMin = document.querySelector('.cont-minute');
    const containerSec = document.querySelector('.cont-second');

    //chuyen textContent thanh dang so
    //neu nho hon 10 ngay thi them so 0, con lai hien thi bth
    //Chuyển textContent thành dạng số
    containerDay.textContent = days < 10 ? `0${days}` : `${days}`; 
    containerHour.textContent = hours < 10 ? `0${hours}` : `${hours}`; 
    containerMin.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`; 
    containerSec.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;
    

}
setInterval(TetHoliday,100);