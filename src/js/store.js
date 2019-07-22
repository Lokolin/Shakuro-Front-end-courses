(function() {
  let currentPage = 1;
  let totalPages;
  const numOfItems = 6;

  let template = document.getElementById('template-list-item');
  let templateHtml = template.innerHTML;
  let listHtml = '';

  fetch('/data/page1.json')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      listHtml = fillTemplate(data);
      document.getElementById('store-items').innerHTML = listHtml;
      totalPages = data.meta.totalPages;
      onClickAction();
    });

  window.addEventListener('scroll', function() {
    let additionalHtml = '';
    let block = document.getElementById('store-items');
    let contentHeight = block.offsetHeight;
    let yOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let y = yOffset + windowHeight;

    if (y >= contentHeight) {
      currentPage = currentPage + 1;

      if (currentPage <= totalPages) {
        fetch('/data/page' + currentPage + '.json')
          .then(function(resp) {
            return resp.json();
          })
          .then(function(data) {
            additionalHtml = '';
            additionalHtml = fillTemplate(data);
            document.getElementById('store-items').innerHTML += additionalHtml;
            totalPages = data.meta.totalPages;
            onClickAction();
          });
      }
    }
  });

  function fillTemplate(data) {
    let newTemplate = '';
    for (let key = 0; key < numOfItems; key++) {
      newTemplate += templateHtml
        .replace(/{{subtitle}}/g, data.items[key]['subtitle'])
        .replace(/{{image}}/g, data.items[key]['image'])
        .replace(/{{name}}/g, data.items[key]['name'])
        .replace(/{{price}}/g, data.items[key]['price']);
    }
    return newTemplate;
  }

  document.getElementById('myInput').onkeyup = function storeSearch() {
    var input, filter, itemsBlock, item, name, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    itemsBlock = document.getElementById('store-items');
    item = itemsBlock.getElementsByClassName('blog-article-card');

    for (i = 0; i < item.length; i++) {
      name = item[i].getElementsByTagName('p')[0];
      if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = '';
      } else {
        item[i].style.display = 'none';
      }
    }
  };

  function getCardInfo(name) {
    itemSubtitle = name.querySelector('#subtitle').innerHTML;
    itemName = name.querySelector('.store-text').innerHTML;
    itemPrice = name.querySelector('#price').innerHTML;
    console.log(
      'Category: ' +
        itemSubtitle +
        '\n' +
        'Item name: ' +
        itemName +
        '\n' +
        'Item price:' +
        itemPrice,
    );
  }

  let onClickAction = () => {
    let links = document.getElementsByClassName('cardInfoLink');
    Array.from(links).forEach(element => {
      element.onclick = () => getCardInfo(element);
    });
  };

  window.onload = function() {
    let spinner = document.querySelector('#loading');
    spinner.style.visibility = 'hidden';
  };
})();
