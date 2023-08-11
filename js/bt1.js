// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng[10 điểm]
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng
// ● Ví dụ: [3, 5, 88, 99, 76, 8, 4, 5, 85, 63] in ra 99

let arr = [2, 3, 77, 9, 6, 17, 27, 46, 33, 55];
let maxInArr =Math.max.apply(Math, arr);
console.log(maxInArr);