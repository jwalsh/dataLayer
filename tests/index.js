import * as dataPlayer from '../src/index';

let dataLayer = new dataPlayer
      .dataLayer(
        {
          'foo': 'bar',
          'baz': 'boo'
        }
      );


// https://github.com/google/data-layer-helper
dataLayer.push({
  title: "Migratory patterns of ducks",
  category: "Science",
  author: "Bradley Wogulis"
});

// dataLayer.push({'event': 'button1-click'});
dataLayer.push({'event': 'button1-click'});


dataLayer.push({
  'color': 'red',
  'conversionValue': 50,
  'event': 'customizeCar'
});

console.log(dataLayer);
