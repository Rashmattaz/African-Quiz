var preloaded = document.querySelector('.preloaded');
var queue = new createjs.LoadQueue(true,null,true);

queue.on('fileload', handleLoad, this);

queue.on('progress', handleProgress, this);

queue.on('complete', handleComplete, this);

queue.loadManifest([
  {
    id: 'lag',
    crossOrigin: true,
    type: createjs.Types.IMAGE,
    src: 'lagos.jpg'
  },
  {
    id: 'hk',
    crossOrigin: true,
    type: createjs.Types.IMAGE,
    src: 'accra.jpg'
  },
  {
    id: 'dou',
    crossOrigin: true,
    type: createjs.Types.IMAGE,
    src: 'douala.jpg'
  },
  {
    id: 'joh',
    crossOrigin: true,
    type: createjs.Types.IMAGE,
    src: 'johannesburg.jpg'
  },
  {
    id: 'nai',
    crossOrigin: true,
    type: createjs.Types.IMAGE,
    src: 'nairobi.jpg'
  }
]);

function handleProgress(event) {
  console.log(event.progress);
}

function handleLoad(event) {
 
  var img = new Image();

  img.src = event.item.src;
  preloaded.appendChild(img);

}

function handleComplete() { 
  document.querySelector('.main-container').classList.add('loaded');
  console.log('done');
}


Resources
