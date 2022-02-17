const url = window.location.href
// check if base url matches https://sj.uukanshu.com/
if (url.indexOf('https://sj.uukanshu.com/') === 0) {
    console.log('mobile')
    mobile()
} else {
    console.log('not mobile')
}

function cleanup(text) {

    const textBasic = text.replace(
        /[\uff01-\uff5e]/g,
        function (ch) { return String.fromCharCode(ch.charCodeAt(0) - 0xfee0); }
    )

    const removedUseless = textBasic.replaceAll('UU看书 www.uukanshu.com', '')
    const removedUseless1 = removedUseless.replaceAll('UU看書 www.uukanshu.com', '')
    const removedUseless2 = removedUseless1.replaceAll('UU看書www.uukanshu.com', '')
    const removedUseless3 = removedUseless2.replaceAll('UU看书www.uukanshu.com', '')
    const addSpace = removedUseless3.replaceAll(',', ', ')
    const addSpace1 = addSpace.replaceAll(':', ': ')
    const replaceDot = addSpace1.replaceAll('。', '.')
    const replaceTripleDot = replaceDot.replaceAll('…', '.')
    return replaceTripleDot
}

function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    // navigator.clipboard.writeText(text);
    alert("Copied");
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function mobile() {
    const content = document.querySelector('.bookContent').innerHTML
    // replace all <br> to \n
    const contentWithBr = content.replaceAll('<br>', '\n')
    // replace nbsp to space
    const contentWithSpace = contentWithBr.replaceAll('&nbsp;', ' ')
    // remove all tags
    const contentWithoutTags = contentWithSpace.replace(/<\/?[^>]+(>|$)/g, "");


    const title = document.querySelector('h3')
    const copyButton = document.createElement("button")
    copyButton.style = 'padding: 5px; margin-left: auto; margin-right: auto; display: block; margin-bottom: 20px;'
    copyButton.innerText = 'Copy'
    copyButton.onclick = function () {
        const clean = cleanup(contentWithoutTags)
        copyToClipboard(clean)
        console.log(clean)
    }

    const navigationPanel = document.querySelector('.rp-switch')
    navigationPanel.style = 'text-align: center; margin-bottom: 20px;'
    insertAfter(copyButton, title)
    insertAfter(navigationPanel, copyButton)

    // console.log(contentWithoutTags)

}
