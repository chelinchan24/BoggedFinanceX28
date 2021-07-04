window.onload = function () {
    var container = document.createElement('h3');

    container.setAttribute('id', 'twd-price')
    container.setAttribute('class', 'dark:text-primary text-primary-dark mt-2 flex flex-row items-center')
    container.setAttribute('style', 'font-size:18px !important;  display:block !important; margin: 0px; opacity: 0.8')

    document.querySelector("body > div > div.flex.pt-20.h-full.relative > div > nav > div.p-4").appendChild(container)

    setInterval(updatePrice, 8000)

    function updatePrice () {
        var twd = Number(document.evaluate("/html/body/div/div[1]/div/nav/div[1]/h3/text()", document, null, XPathResult.STRING_TYPE, null).stringValue.split('$')[1])*28
        var numberFormat = new Intl.NumberFormat('en-US')
        var formatedNumber = numberFormat.format(twd.toFixed(3))
        document.getElementById('twd-price').innerText = '≈NT$' + formatedNumber
    }

}
