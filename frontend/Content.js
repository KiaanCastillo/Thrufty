// On screen button
var imgBtn = document.createElement('img');
var iconBase64 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA4MCA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yXzIwKSI+CjxwYXRoIGQ9Ik0xNiAyMEMxNiAxMy4zNzI2IDIxLjM3MjYgOCAyOCA4SDgwVjcySDI4QzIxLjM3MjYgNzIgMTYgNjYuNjI3NCAxNiA2MFYyMFoiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8yXzIwKSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kaV8yXzIwKSI+CjxwYXRoIGQ9Ik02NS4yMSAzMC43NDI1TDYwLjI1NzUgMjUuNzlDNTkuMjczOSAyNC44MDUyIDU3LjkzOTQgMjQuMjUxMiA1Ni41NDc1IDI0LjI1SDQ1LjQ1MjVDNDQuMDYwNiAyNC4yNTEyIDQyLjcyNjEgMjQuODA1MiA0MS43NDI1IDI1Ljc5TDM2Ljc5IDMwLjc0MjVDMzUuODA1MiAzMS43MjYxIDM1LjI1MTIgMzMuMDYwNiAzNS4yNSAzNC40NTI1VjUwLjVDMzUuMjUgNTEuODkyNCAzNS44MDMxIDUzLjIyNzcgMzYuNzg3NyA1NC4yMTIzQzM3Ljc3MjMgNTUuMTk2OSAzOS4xMDc2IDU1Ljc1IDQwLjUgNTUuNzVINjEuNUM2Mi44OTI0IDU1Ljc1IDY0LjIyNzcgNTUuMTk2OSA2NS4yMTIzIDU0LjIxMjNDNjYuMTk2OSA1My4yMjc3IDY2Ljc1IDUxLjg5MjQgNjYuNzUgNTAuNVYzNC40NTI1QzY2Ljc0ODggMzMuMDYwNiA2Ni4xOTQ4IDMxLjcyNjEgNjUuMjEgMzAuNzQyNVYzMC43NDI1Wk01MSA0N0M0OS4xNDM1IDQ3IDQ3LjM2MyA0Ni4yNjI1IDQ2LjA1MDMgNDQuOTQ5N0M0NC43Mzc1IDQzLjYzNyA0NCA0MS44NTY1IDQ0IDQwQzQ0IDM5LjUzNTkgNDQuMTg0NCAzOS4wOTA4IDQ0LjUxMjYgMzguNzYyNkM0NC44NDA4IDM4LjQzNDQgNDUuMjg1OSAzOC4yNSA0NS43NSAzOC4yNUM0Ni4yMTQxIDM4LjI1IDQ2LjY1OTIgMzguNDM0NCA0Ni45ODc0IDM4Ljc2MjZDNDcuMzE1NiAzOS4wOTA4IDQ3LjUgMzkuNTM1OSA0Ny41IDQwQzQ3LjUgNDAuOTI4MyA0Ny44Njg3IDQxLjgxODUgNDguNTI1MSA0Mi40NzQ5QzQ5LjE4MTUgNDMuMTMxMyA1MC4wNzE3IDQzLjUgNTEgNDMuNUM1MS45MjgzIDQzLjUgNTIuODE4NSA0My4xMzEzIDUzLjQ3NDkgNDIuNDc0OUM1NC4xMzEzIDQxLjgxODUgNTQuNSA0MC45MjgzIDU0LjUgNDBDNTQuNSAzOS41MzU5IDU0LjY4NDQgMzkuMDkwOCA1NS4wMTI2IDM4Ljc2MjZDNTUuMzQwOCAzOC40MzQ0IDU1Ljc4NTkgMzguMjUgNTYuMjUgMzguMjVDNTYuNzE0MSAzOC4yNSA1Ny4xNTkyIDM4LjQzNDQgNTcuNDg3NCAzOC43NjI2QzU3LjgxNTYgMzkuMDkwOCA1OCAzOS41MzU5IDU4IDQwQzU4IDQxLjg1NjUgNTcuMjYyNSA0My42MzcgNTUuOTQ5NyA0NC45NDk3QzU0LjYzNyA0Ni4yNjI1IDUyLjg1NjUgNDcgNTEgNDdaTTQxLjIxNzUgMzEuMjVMNDQuMjEgMjguMjU3NUM0NC41NDU0IDI3LjkzNzcgNDQuOTg5MiAyNy43NTY0IDQ1LjQ1MjUgMjcuNzVINTYuNTQ3NUM1Ny4wMTA4IDI3Ljc1NjQgNTcuNDU0NiAyNy45Mzc3IDU3Ljc5IDI4LjI1NzVMNjAuNzgyNSAzMS4yNUg0MS4yMTc1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfMl8yMCIgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjgiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4xNTI5NDEgMCAwIDAgMCAwLjE1Mjk0MSAwIDAgMCAwIDAuMTUyOTQxIDAgMCAwIDAuMTYgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18yXzIwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzJfMjAiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZGlfMl8yMCIgeD0iMzEuMjUiIHk9IjIyLjI1IiB3aWR0aD0iMzkuNSIgaGVpZ2h0PSI0MS41IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18yXzIwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzJfMjAiIHJlc3VsdD0ic2hhcGUiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iLTIiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuNDU5NjIzIDAgMCAwIDAgMC43NzIyOTQgMCAwIDAgMCAwLjk5ODcxIDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0Ml9pbm5lclNoYWRvd18yXzIwIi8+CjwvZmlsdGVyPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMl8yMCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg3MiA2Mykgcm90YXRlKDc0LjYxMTUpIHNjYWxlKDU2LjUyNjUpIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0FFRTdGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNDcyRkUiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
imgBtn.src = iconBase64;
imgBtn.alt = 'On screen button image';
imgBtn.setAttribute('id', 'imgBtn');

// Popup stuffs
var popupDiv = document.createElement('div'); // <div popup>
popupDiv.setAttribute('id', 'popup');
var popupContent = document.createElement('div'); // <div popup-content>
popupContent.setAttribute('class', 'popup-content');
popupContent.setAttribute('id', 'popup-content-id');
var closeBtn = document.createElement('span'); // <span close>
closeBtn.setAttribute('class', 'close');
closeBtn.addEventListener("click", closePopup);
var iconClose = document.createElement('img'); // <img>
var iconCloseBase64 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNzgzMzUgNkwxMS4zODg5IDEuMzk0NDRDMTEuNDc5OSAxLjI4ODE2IDExLjUyNzUgMS4xNTE0NSAxMS41MjIxIDEuMDExNjNDMTEuNTE2NyAwLjg3MTgxNSAxMS40NTg3IDAuNzM5MTgyIDExLjM1OTggMC42NDAyNDFDMTEuMjYwOCAwLjU0MTI5OSAxMS4xMjgyIDAuNDgzMzM3IDEwLjk4ODQgMC40Nzc5MzZDMTAuODQ4NiAwLjQ3MjUzNSAxMC43MTE4IDAuNTIwMDk0IDEwLjYwNTYgMC42MTExMDlMNi4wMDAwMSA1LjIxNjY2TDEuMzk0NDYgMC42MDU1NTNDMS4yODk4NCAwLjUwMDk0IDEuMTQ3OTYgMC40NDIxNjkgMS4wMDAwMSAwLjQ0MjE2OUMwLjg1MjA2NyAwLjQ0MjE2OSAwLjcxMDE4MSAwLjUwMDk0IDAuNjA1NTY4IDAuNjA1NTUzQzAuNTAwOTU1IDAuNzEwMTY3IDAuNDQyMTgzIDAuODUyMDUzIDAuNDQyMTgzIDAuOTk5OTk4QzAuNDQyMTgzIDEuMTQ3OTQgMC41MDA5NTUgMS4yODk4MyAwLjYwNTU2OCAxLjM5NDQ0TDUuMjE2NjggNkwwLjYwNTU2OCAxMC42MDU2QzAuNTQ3NDExIDEwLjY1NTQgMC41MDAxNzggMTAuNzE2NiAwLjQ2NjgzMSAxMC43ODU2QzAuNDMzNDg1IDEwLjg1NDUgMC40MTQ3NDYgMTAuOTI5NiAwLjQxMTc5MSAxMS4wMDYxQzAuNDA4ODM2IDExLjA4MjYgMC40MjE3MjggMTEuMTU4OSAwLjQ0OTY1OCAxMS4yMzAyQzAuNDc3NTg4IDExLjMwMTUgMC41MTk5NTQgMTEuMzY2MiAwLjU3NDA5NSAxMS40MjA0QzAuNjI4MjM3IDExLjQ3NDUgMC42OTI5ODUgMTEuNTE2OSAwLjc2NDI3NyAxMS41NDQ4QzAuODM1NTY5IDExLjU3MjcgMC45MTE4NjUgMTEuNTg1NiAwLjk4ODM3NSAxMS41ODI3QzEuMDY0ODkgMTEuNTc5NyAxLjEzOTk2IDExLjU2MSAxLjIwODg4IDExLjUyNzZDMS4yNzc4MSAxMS40OTQzIDEuMzM5MSAxMS40NDcgMS4zODg5IDExLjM4ODlMNi4wMDAwMSA2Ljc4MzMzTDEwLjYwNTYgMTEuMzg4OUMxMC43MTE4IDExLjQ3OTkgMTAuODQ4NiAxMS41Mjc1IDEwLjk4ODQgMTEuNTIyMUMxMS4xMjgyIDExLjUxNjcgMTEuMjYwOCAxMS40NTg3IDExLjM1OTggMTEuMzU5OEMxMS40NTg3IDExLjI2MDggMTEuNTE2NyAxMS4xMjgyIDExLjUyMjEgMTAuOTg4NEMxMS41Mjc1IDEwLjg0ODUgMTEuNDc5OSAxMC43MTE4IDExLjM4ODkgMTAuNjA1Nkw2Ljc4MzM1IDZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K";
iconClose.src = iconCloseBase64;
iconClose.alt = "Close button image";
closeBtn.appendChild(iconClose);
popupContent.appendChild(closeBtn);
var title = document.createElement('h4'); // <h4>
title.setAttribute('class', 'title');
title.setAttribute('id', 'title-id');
title.textContent = "dummy Title lakflsk lkj slf lkjlkj;j lkj lkjsf l;kj ;jk";
var subtitle = document.createElement('p'); // <p>
subtitle.setAttribute('class', 'subtitle');
subtitle.setAttribute('id', 'subtitle-id');
subtitle.textContent = "__ results found";

// </>
popupContent.appendChild(title);
popupContent.appendChild(subtitle);
popupDiv.appendChild(popupContent);
document.body.appendChild(popupDiv);

// Listener for the floating button
imgBtn.addEventListener("click", receivedMessageDOM)
document.body.appendChild(imgBtn);

// window.onclick = function(event) {
//     var popup = document.getElementById('popup');
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
// }


// -----------------------------------
// Listener for background

chrome.runtime.onMessage.addListener(receivedMessageBG);

async function getListProducts(searchkey) {
    let products = await (await fetch(`https://thrufty.herokuapp.com/api/search?name=${searchkey}`, {mode: 'no-cors'})).json();
    return products;
  }


// Floating
async function receivedMessageDOM (){
    let productTitleDOM = document.querySelector('h1').textContent.trim();
    var widgetTitle = document.getElementById('title-id');
    widgetTitle.textContent = productTitleDOM;
    // send msg to background?
    // trigger API call
    let mockData = [
        {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2021/07/29/6102fff80bee62837f60f4b2/s_610306a5180136be51916497.jpeg",
            "link": "https://poshmark.ca/listing/Lightweight-packable-rain-jacket-6102fff80bee62837f60f4b2",
            "price": "C$17",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/BLUENOTES-RELAXED-FIT-DENIM-JACKET-5f8e3ec4074d246032575b36",
            "price": "C$20",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Hollister-Relaxed-Fit-Denim-Jacket-60563cf767bd9176eca8a324",
            "price": "C$20",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/06/12/62a679a5a4de41e8aa44b7de/s_62a679ade13164e60e5fe968.jpg",
            "link": "https://poshmark.ca/listing/Lululemon-Puffer-Lightweight-Relaxed-Fit-Down-Jacket-62a679a5a4de41e8aa44b7de",
            "price": "C$110",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/American-Eagle-Lightweight-Rain-Jacket-6164fd7860fdedf01ea6fc88",
            "price": "C$15",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Vintage-1990s-LEVIS-550-RELAXED-FIT-TAPERED-LEG-619573c9ff83041e982a4ba4",
            "price": "C$50",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Reebok-Silver-Pullover-lightweight-Rain-Jacket-5f5acd7088cce30bd16a7975",
            "price": "C$13",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/05/03/62719ba04fd23a49c2fcaab1/s_62719babefd0e4184658f2b6.jpg",
            "link": "https://poshmark.ca/listing/Cabelas-Lightweight-Rain-Jacket-62719ba04fd23a49c2fcaab1",
            "price": "C$15",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/06/17/62aceed5a4de41182a7a4e32/s_62acef58008b997de6b69591.jpg",
            "link": "https://poshmark.ca/listing/Carhartt-Rain-Defender-Utility-Coat-Parka-Relaxed-Fit-Coat-Sherpa-Hood-Quilted-62aceed5a4de41182a7a4e32",
            "price": "C$130",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Levis-relaxed-fit-corduroy-jacket-6293fe028da5c9c894b36099",
            "price": "C$40",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/NWT-packable-lightweight-rain-jacket-6283dffcefd0e4198a8f5330",
            "price": "C$35",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Girls-Columbia-Lightweight-Windbreaker-Rain-Jacket-6045346aae766fb1a9e5c4d1",
            "price": "C$16",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Carhartt-Storm-Defender-Jacket-62b7301809d76020cf7f0bbd",
            "price": "C$120",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2021/07/06/60e50f724fd23a1bc9179fce/s_60e50f85bcbb524337ee7df5.jpg",
            "link": "https://poshmark.ca/listing/Moncler-lightweight-rain-jacket-60e50f724fd23a1bc9179fce",
            "price": "C$500",
            "store": "Poshmark"
            },
            {
            "img": "https://media-photos.depop.com/b0/4301228/1243401877_f469ca907a7344a39d2db58999fa06f1/P7.jpg",
            "link": "https://www.depop.com/products/pineapplehillstore-carhartt-upland-hunting-jacket-available",
            "price": "£109.99",
            "store": "Depop"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/ADIDAS-LIGHTWEIGHT-RAIN-JACKET-61cd2bc4ae766f3e7e7c378e",
            "price": "C$18",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Suede-Moto-Jacket-Relaxed-Fit-62200652163df4bbdd95ebba",
            "price": "C$29",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/LULULEMON-relaxed-fit-mesh-jacket-622fd011691412fb7a38ee44",
            "price": "C$45",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Black-Lululemon-Stretch-Seal-Relaxed-Fit-Rain-Jacket-61e3c060ffba940734f6e4a5",
            "price": "C$120",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2020/10/10/5f81e5b29e15597774fdbbf6/s_5f81e5c8ae766fb906af6f35.jpg",
            "link": "https://poshmark.ca/listing/Lightweight-relaxed-fit-patterned-sweater-5f81e5b29e15597774fdbbf6",
            "price": "C$18",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2020/08/08/5f2f212eefd0e4e7c861533b/s_5f2f21443cda8872af2b5472.jpg",
            "link": "https://poshmark.ca/listing/Bench-lightweight-rain-jacket-5f2f212eefd0e4e7c861533b",
            "price": "C$35",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/XL-Rain-Jacket-Hooded-Lightweight-Waterproof-Rain-Shell-Jacket-622512e884bb0b70b2b54580",
            "price": "C$25",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Community-gray-rain-jacket-generally-lightweight-60cd05b49c33786be1c5b3e4",
            "price": "C$40",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Merrell-lightweight-rain-jacket-size-XS-62434f3a920786ed752f4daf",
            "price": "C$68",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Relaxed-Fit-Denim-Jacket-5f432c86ac9702ec9a13b1f9",
            "price": "C$17",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/LEVIS-Lightweight-Rubberized-Fishtail-Rain-Jacket-6246585112d880ed2941e145",
            "price": "C$60",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Lululemon-NWT-Lightweight-Relaxed-Fit-Down-Jacket-Size-10-62af83eb180136e211777ac1",
            "price": "C$126",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Bright-purple-lightweight-rain-jacket-610da4f960fdedef5a78a555",
            "price": "C$15",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Relaxed-boyfriend-fit-field-jacket-625dd59381a36c0df66aefc9",
            "price": "C$30",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/06/12/62a6caeb92078669cef7ca13/s_62a6cb0ec3c2d0fd23f958d8.jpg",
            "link": "https://poshmark.ca/listing/Carhartt-Rain-Defender-Jacket-in-Black-62a6caeb92078669cef7ca13",
            "price": "C$100",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Jolie-womens-relaxed-fit-lightweight-pattern-dress-62aebffbac9702ed62a72010",
            "price": "C$25",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2021/03/23/605a3093ae766f315a293194/s_605a30a06f6c91518b309430.jpg",
            "link": "https://poshmark.ca/listing/Relaxed-fit-striped-lightweight-sweater-605a3093ae766f315a293194",
            "price": "C$15",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Northface-lightweight-rain-jacket-XL-Slimfit-6233c13ce13164fd505c7a5c",
            "price": "C$50",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/01/18/61e71c048da5c999532bb2f8/s_61e71c45efd0e46d81ccea0b.jpg",
            "link": "https://poshmark.ca/listing/Mondetta-Lightweight-Rain-Jacket-61e71c048da5c999532bb2f8",
            "price": "C$70",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/LululemonRelaxed-Fit-Mesh-Jacket-6122e81569141298ff6b8329",
            "price": "C$108",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Black-Relaxed-Fit-Jacket-62b3a5be57600697b3b1fc39",
            "price": "C$60",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/04/04/624b9a9706d59c1e12d1fdd3/s_624b9aa4180136de9d511927.jpg",
            "link": "https://poshmark.ca/listing/Lululemon-StretchFit-Relaxed-Fit-Rain-Jacket-624b9a9706d59c1e12d1fdd3",
            "price": "C$160",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Mondetta-Lightweight-Rain-Jacket-Size-Large-61fdaa84045e39b1aa37cfe1",
            "price": "C$64",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/G-Lab-Lightweight-Hooded-Rain-Jacket-621e662409d76043363da190",
            "price": "C$329",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Uniqlo-Green-Lightweight-Rain-Jacket-5dc862d2de696af042c60f00",
            "price": "C$35",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Nike-Move-to-Zero-14-zip-rain-jacket-relaxed-fit-627478e59207866d0c23c608",
            "price": "C$178",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/HUNTER-Original-Lightweight-Rain-Jacket-6269ac664eeede10c98002b8",
            "price": "C$250",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/03/21/6238d8f0bcbb52218a675b72/s_6299160fae766fb638657536.jpg",
            "link": "https://poshmark.ca/listing/Adidas-Lightweight-Rain-Jacket-6238d8f0bcbb52218a675b72",
            "price": "C$39",
            "store": "Poshmark"
            },
            {
            "img": "https://di2ponv0v5otw.cloudfront.net/posts/2022/03/19/623626b75e46b0eac6c0ce2f/s_623626f2446e597d217b6158.jpg",
            "link": "https://poshmark.ca/listing/Lightweight-Columbia-Rain-Jacket-623626b75e46b0eac6c0ce2f",
            "price": "C$40",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Lightweight-animal-print-rain-jacket-6270a06c800f64038a642c61",
            "price": "C$25",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Relaxed-fit-activewear-jacket-600dabfe920786bb81c36e1c",
            "price": "C$27",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Womens-Medium-Hurley-Lightweight-Rain-Jacket-60de0cdb4fd23a9a325a6feb",
            "price": "C$30",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Cropped-Maroon-Tanktop-Lightweight-Relaxed-fit-6287d6f6c3c2d0601bbaca79",
            "price": "C$10",
            "store": "Poshmark"
            },
            {
            "img": null,
            "link": "https://poshmark.ca/listing/Mango-RainWind-jacket-lightweight-62170a29a4de41ba7c0b7b93",
            "price": "C$45",
            "store": "Poshmark"
            }
    ];
    // await fetch(`https://thrufty.herokuapp.com/api/search?name=${productTitleDOM}`, {mode: 'no-cors'})
    //     .then(response => console.log(response.body));
    // console.log(await response.json());
    // await getListProducts(productTitleDOM).then(products => {
    //     console.log(products)
    // });

    // modify DOM ------------
    var popup = document.getElementById('popup');
    var popupContents = document.getElementById('popup-content-id');
    var itemsDiv = document.createElement('div');
    itemsDiv.setAttribute('class', 'items');
    let count = 0;
    mockData.forEach((item, index) => {
        if(item.img != null){
            count++;
            var itemDiv = document.createElement('a');
            itemDiv.href = item.link;
            var imgBackground = document.createElement('img');
            imgBackground.src = item.img;
            imgBackground.alt = "item image";
            itemDiv.textContent = item.price;
            itemDiv.setAttribute('class', 'item');
            itemDiv.appendChild(imgBackground);
            itemsDiv.appendChild(itemDiv);
        }
    });
    var subtitle = document.getElementById('subtitle-id');
    subtitle.textContent = `${count} results found`;
    popupContents.appendChild(itemsDiv);
    popup.style.display = "block";

    // testing below ----------------------
    let domMsg = {
        txt: "dom msg"
    };

    // chrome.runtime.sendMessage(domMsg, async function(response) {
    //     console.log(response);
    //  });
    console.log("clicking floating button...")
}

// Floating closes
function closePopup () {
    var popup = document.getElementById('popup');
    popup.style.display = "none";
}

// Top
function receivedMessageBG (message, sender, sendResponse) {
    // send msg to background?
    // trigger API call
    // modify DOM
    let title = document.querySelector('h1').textContent.trim();
    // window.location.href --> amazon or not --> id='title'
    console.log(title);
    console.log(message.txt);
};

