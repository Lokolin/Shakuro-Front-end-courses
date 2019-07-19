var dataObject2 = {
  items: [
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
    {
      subtitle: 'Bestseller',
      image: '/img/store-2.png',
      name: 'Xiaomi Mi Band 2',
      price: '384.4',
    },
    {
      subtitle: 'Goods of the week',
      image: '/img/store-3.png',
      name: 'LG 43UH610V',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-4.png',
      name: 'Electrolux EZB 52410 AK',
      price: '384.4',
    },
    {
      subtitle: 'Bestseller',
      image: '/img/store-5.png',
      name: 'Beats studio wireless',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-6.png',
      name: 'Nikon D3300 Kit',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
    {
      subtitle: 'Recommend',
      image: '/img/store-1.png',
      name: 'Asus ZenFone Go ZB45',
      price: '384.4',
    },
  ],
};

let lastItem = 6;

window.onload = function() {
  var template = document.getElementById('template-list-item');
  var templateHtml = template.innerHTML;
  var listHtml = '';

  for (let key = 0; key < lastItem; key++) {
    listHtml += templateHtml
      .replace(/{{subtitle}}/g, dataObject2['items'][key]['subtitle'])
      .replace(/{{image}}/g, dataObject2['items'][key]['image'])
      .replace(/{{name}}/g, dataObject2['items'][key]['name'])
      .replace(/{{price}}/g, dataObject2['items'][key]['price']);
  }

  document.getElementById('store-items').innerHTML = listHtml;

  window.addEventListener('scroll', function() {
    let additionalHtml = '';
    var block = document.getElementById('store-items');
    var contentHeight = block.offsetHeight;
    var yOffset = window.pageYOffset;
    var window_height = window.innerHeight;
    var y = yOffset + window_height;

    if (y >= contentHeight && lastItem < dataObject2.items.length) {
      console.log('функция сработала');
      console.log(lastItem);
      for (
        let key = lastItem;
        key < lastItem + 6 && key < dataObject2.items.length;
        key++
      ) {
        additionalHtml += templateHtml
          .replace(/{{subtitle}}/g, dataObject2['items'][key]['subtitle'])
          .replace(/{{image}}/g, dataObject2['items'][key]['image'])
          .replace(/{{name}}/g, dataObject2['items'][key]['name'])
          .replace(/{{price}}/g, dataObject2['items'][key]['price']);
        lastItem = lastItem + 6;
      }
      document.getElementById('store-items').innerHTML += additionalHtml;
    }
  });
};
