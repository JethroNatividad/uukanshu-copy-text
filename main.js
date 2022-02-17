const url = window.location.href
// check if base url matches https://sj.uukanshu.com/
if (url.indexOf('https://sj.uukanshu.com/') === 0) {
    console.log('mobile')
    mobile()
} else {
    console.log('not mobile')
}


function mobile() {
    const content = document.querySelector('.bookContent')
    console.log(content.textContent)
}