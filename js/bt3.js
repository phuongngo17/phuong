// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào: nhập tháng 8 năm 2023
// ● Đầu ra: số ngày trong tháng đó là 31

let thang = parseInt(prompt("Nhập vào tháng:"));
let nam = parseInt(prompt("Nhập vào năm:"));

function soNgayTrongThang(thang, nam) {
    if (thang === 2) {
        if (
            (nam % 4 === 0 && nam % 100 !== 0) ||
            nam % 400 === 0
        ) {
            return 29;
        } else {
            return 28;
        }
    } else if ([4, 6, 9, 11].includes(thang)) {
        return 30;
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(thang)) {
        return 31;
    } else {
        return -1; 
    }
}

let soNgay = soNgayTrongThang(thang, nam);
if (soNgay !== -1) {
    console.log("Tháng", thang, "năm", nam, "có", soNgay, "ngày.");
} else {
    console.log("Tháng không hợp lệ.");
}
