let faqContainer = document.querySelector("#faq-container");
let faqElements = document.getElementsByClassName("faq-element");
let faqElementsHead = document.getElementsByClassName("faq-element-head");
let faqElementsBody = document.getElementsByClassName("faq-element-body");

for (var i = 0; i < faqElementsHead.length; i++) {
    faqElementsHead[i].addEventListener("click", (e) => {
        parent = e.target.parentNode;
        let ind = Array.from(faqElementsHead).indexOf(parent)

        if (Array.from(faqElementsHead).indexOf(parent) == -1) {
            ind = Array.from(faqElementsHead).indexOf(e.target)
        }
        console.log(ind);
        faqElementsBody[ind].classList.toggle("open");
        parent.querySelector(".plus").classList.toggle("close");
    })
}