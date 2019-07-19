let currentPage = 1;
let totalPages;
const numOfItems = 6;

window.onload = function() {
  var template = document.getElementById('template-list-item');
  var templateHtml = template.innerHTML;
  var listHtml = '';

  fetch('/data/page1.json')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      for (let key = 0; key < 6; key++) {
        listHtml += templateHtml
          .replace(/{{subtitle}}/g, data['items'][key]['subtitle'])
          .replace(/{{image}}/g, data['items'][key]['image'])
          .replace(/{{name}}/g, data['items'][key]['name'])
          .replace(/{{price}}/g, data['items'][key]['price']);
      }
      document.getElementById('store-items').innerHTML = listHtml;
      totalPages = data.meta.totalPages;
    });

  window.addEventListener('scroll', function() {
    let additionalHtml = '';
    var block = document.getElementById('store-items');
    var contentHeight = block.offsetHeight;
    var yOffset = window.pageYOffset;
    var window_height = window.innerHeight;
    var y = yOffset + window_height;

    if (y >= contentHeight) {
      currentPage = currentPage + 1;
      if (currentPage <= totalPages) {
        fetch('/data/page' + currentPage + '.json')
          .then(function(resp) {
            return resp.json();
          })
          .then(function(data) {
            for (let key = 0; key < 6; key++) {
              additionalHtml += templateHtml
                .replace(/{{subtitle}}/g, data['items'][key]['subtitle'])
                .replace(/{{image}}/g, data['items'][key]['image'])
                .replace(/{{name}}/g, data['items'][key]['name'])
                .replace(/{{price}}/g, data['items'][key]['price']);
            }
            document.getElementById('store-items').innerHTML += additionalHtml;
            totalPages = data.meta.totalPages;
          });
      }
    }
  });
};
