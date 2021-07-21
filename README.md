# BoggedFinance 28 倍
<img width="344" alt="截圖 2021-07-04 下午7 53 32" src="https://user-images.githubusercontent.com/16677586/124383914-89b55400-dd01-11eb-9d47-6b26d2dee2ff.png">

一款 Google Chrome 擴充套件，用於在 Bogged Finance 網站的錢包金額下面，顯示美金乘以 28 倍後的額度，藉此計算出新台幣的大約金額。

這款套件寫得非常簡陋，只會每 8 秒鐘檢查一次目前的美金額度來換算，沒有直接監聽美金的變化。所以首次開啟後需要等 8 秒鐘才會出現換算後的金額。

## 使用
本套件未封裝，請參閱[開發說明文件](https://support.google.com/chrome/a/answer/2714278?hl=zh-Hant)的「步驟 2」來載入。

### V3 Chart 的注意事項
BoggedFinance Chart 自 2021 年 7 月 9 日更新 V3 版本之後，錢包金額已經不會常駐在畫面左側，而是改為在用戶持有所檢視之 Token 的資產時，才會在 Token 的 Marketcap 旁載入錢包金額的 DOM 元素。我很懶，所以現在只有簡單應對而已，我把程式寫成會無限檢查錢包金額的 DOM 是否有產生，若有產生就載入轉換金額的程式。如果在檢視沒有持有資產的 Token 時，可能會因為無限檢查的程式而影響網頁效能。還請多加注意。

## 授權
本套件以[姓名標示-非商業性 4.0 國際](https://creativecommons.org/licenses/by-nc/4.0/deed.zh_TW)發布，作者 @chelinchan24。
