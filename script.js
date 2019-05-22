function count(arr, data) {
    let count = 0;
    let position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (let i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }

        for (let i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}

function binSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

let nums = [];
for (let i=0; i<100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}

document.write("<br>");

let val = parseInt(prompt("Enter a value to count: "));
let retVal = count(nums, val);
document.write("Found: " + retVal + " occurences of " + val + ".");