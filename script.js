

document.querySelector(".nav-logo").addEventListener("click", () => {
    window.open('index.html', '_self')

})


let buybtn = document.querySelectorAll(".cart-btn");


buybtn.forEach(el => {

    el.addEventListener("click", (i) => {

        let obj = {
            imgp: i.target.parentNode.firstElementChild.src,
            title: i.target.parentNode.children[1].innerText,
            price: i.target.parentNode.children[2].children[1].innerText,
        }

        let data = JSON.stringify(obj);
        localStorage.setItem("data", data)

        location.href = "add-to-cart.html"

    })

});

function proDes() {

    let data = localStorage.getItem("data")
    let pdes = JSON.parse(data)

    // console.log(sd)

    document.querySelector(".p-img").src = pdes.imgp;
    document.querySelector(".p-title").innerText = pdes.title;
    document.querySelector(".p-price").innerText = pdes.price;

    document.querySelector(".p-q").innerText = 1;

}



let dec = document.querySelector(".p-dec")
let q = document.querySelector(".p-q")
let inc = document.querySelector(".p-inc")


dec.addEventListener("click", () => {
    if (q.innerText != 1) {
        q.innerText--
    }
    let data = localStorage.getItem("data")
    let pdes = JSON.parse(data)

    document.querySelector(".p-price").innerText = pdes.price * q.innerText;

})

inc.addEventListener("click", () => {
    if (q.innerText != 10) {
        q.innerText++
    }

    let data = localStorage.getItem("data")
    let pdes = JSON.parse(data)

    document.querySelector(".p-price").innerText = pdes.price * q.innerText;
    console.log(dec.innerText)

})
