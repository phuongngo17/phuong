// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort[30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr = [3, 25, 38, 49, 12]; In ra arr = [49, 38, 25, 12, 3]

// su dung ham sort
let myarray = [5, 12, 3, 1, 4];
myarray.sort(function (a, b) {
    return b - a;
});
console.log(myarray);

// khong su dung ham sort 
let mang = [5, 12, 3, 1, 4];

function descending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}

console.log(descending(mang)); 

