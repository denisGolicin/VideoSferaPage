// let cssId = 'mobile'; 
// if (!document.getElementById(cssId))
// {
//     createMobileDOM();
// }

// window.addEventListener('resize', function() {
//     createMobileDOM();
// });


// function createMobileDOM(){
//     if(window.matchMedia('(max-width: 774px)').matches) {
//         let head  = document.getElementsByTagName('head')[0];
//         let link  = document.createElement('link');
//         link.id   = cssId;
//         link.rel  = 'stylesheet';
//         link.type = 'text/css';
//         link.href = 'css/mobile.css';
//         link.media = 'all';
//         head.appendChild(link);
//     }
//     else {
//         if(document.querySelector('#mobile')){
//             document.querySelector('#mobile').remove()
//         }
//     }
// }