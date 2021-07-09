window.onload = function () {
    var wait = setInterval(function() {
        var balance = document.querySelector("#chartWrapper > div.text-white.justify-between.z-50.lg\\:flex-wrap.flex.flex-col.lg\\:flex-row.lg\\:items-center > div.flex.flex-row.place-content-center.lg\\:place-content-start.lg\\:mr-4.flex-wrap.z-30 > div.items-center.lg\\:h-16.h-10.lg\\:bg-transparent.bg-white.dark\\:bg-transparent.flex.flex-row.justify-center.text-center.lg\\:text-left.lg\\:justify-start.space-x-3.lg\\:pt-0.lg\\:my-1\\.5.my-0.sm\\:space-x-6.w-full.lg\\:w-auto > span.sm\\:flex.lg\\:flex-col.flex-row.hidden.items-center.lg\\:items-start > h4")
        if (typeof(balance) != 'undefined' && balance != null) {
            loadvalue()
        }
    }, 100); // check every 100ms

    function loadvalue() {
        clearInterval(wait);
        var container = document.createElement('p');
        var balance = document.querySelector("#chartWrapper > div.text-white.justify-between.z-50.lg\\:flex-wrap.flex.flex-col.lg\\:flex-row.lg\\:items-center > div.flex.flex-row.place-content-center.lg\\:place-content-start.lg\\:mr-4.flex-wrap.z-30 > div.items-center.lg\\:h-16.h-10.lg\\:bg-transparent.bg-white.dark\\:bg-transparent.flex.flex-row.justify-center.text-center.lg\\:text-left.lg\\:justify-start.space-x-3.lg\\:pt-0.lg\\:my-1\\.5.my-0.sm\\:space-x-6.w-full.lg\\:w-auto > span.sm\\:flex.lg\\:flex-col.flex-row.hidden.items-center.lg\\:items-start > h4")

        container.setAttribute('id', 'twd-price')
        container.setAttribute('style', 'display: inline-block !important; opacity: 0.8; font-size: 15px;')

        balance.appendChild(container)

        setInterval(updatePrice, 8000)

        function updatePrice () {
            var twd = Number(document.evaluate("//*[@id=\"chartWrapper\"]/div[1]/div[1]/div[2]/span[4]/h4/text()", document, null, XPathResult.STRING_TYPE, null).stringValue.split('$')[1])*28
            var numberFormat = new Intl.NumberFormat('en-US')
            var formatedNumber = numberFormat.format(twd.toFixed(3))
            document.getElementById('twd-price').innerText = '≈NT$' + formatedNumber
        }
    }
}
