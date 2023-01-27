let ClickCount = 0;

function getData() {
    console.log("fetching Api", ClickCount++)
}

function MyDebounce(cb, d) {
    return function () {
        setTimeout(() => {
            getData();
        }, d);
    }
}
const apiCall = MyDebounce(getData, 300)