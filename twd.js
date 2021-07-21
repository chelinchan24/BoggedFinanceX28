window.onload = function () {
    var wait = setInterval(function() {
        var balance = document.querySelector("body > div > div.flex.relative.pt-16.h-full > div.flex.fixed.justify-between.border-r.dark\\:border-gray-700.duration-200.overflow-x-hidden.border-gray-200.flex-col.z-40.inset-y-0.left-0.bg-white.dark\\:bg-gray-800.overflow-y-auto.xl\\:static.inset-0.pb-4.w-72 > nav > div:nth-child(4) > div.mt-2.opacity-100 > div > div.px-3.py-2\\.5.dark\\:bg-gray-600.justify-between.flex.flex-row.items-center.dark\\:bg-opacity-40.bg-gray-100.border-b.dark\\:border-gray-700.border-gray-200 > h4 > div")
        if (typeof(balance) != 'undefined' && balance != null) {
            loadvalue()
        }
    }, 100); // check every 100ms

    function loadvalue() {
        clearInterval(wait);
        var container = document.createElement('p');
        var balance = document.querySelector("body > div > div.flex.relative.pt-16.h-full > div.flex.fixed.justify-between.border-r.dark\\:border-gray-700.duration-200.overflow-x-hidden.border-gray-200.flex-col.z-40.inset-y-0.left-0.bg-white.dark\\:bg-gray-800.overflow-y-auto.xl\\:static.inset-0.pb-4.w-72 > nav > div:nth-child(4) > div.mt-2.opacity-100 > div > div.px-3.py-2\\.5.dark\\:bg-gray-600.justify-between.flex.flex-row.items-center.dark\\:bg-opacity-40.bg-gray-100.border-b.dark\\:border-gray-700.border-gray-200 > h4 > div")

        container.setAttribute('id', 'twd-price')
        container.setAttribute('style', 'display: inline-block !important; opacity: 0.8; font-size: 15px;')

        balance.appendChild(container)

        setInterval(updatePrice, 8000)

        function updatePrice () {
            var twd = Number(document.evaluate("/html/body/div/div[2]/div[2]/nav/div[4]/div[2]/div/div[1]/h4/div/text()", document, null, XPathResult.STRING_TYPE, null).stringValue.split('$')[1])*28
            var numberFormat = new Intl.NumberFormat('en-US')
            var formatedNumber = numberFormat.format(twd.toFixed(3))
            document.getElementById('twd-price').innerText = '≈NT$' + formatedNumber
        }
    }
}
