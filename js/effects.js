
//  ****** scroll logo script  ******/
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }


    
// ****** video pop up   ******/
    $(function () {
      $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    });




    //*****  Accordian script ******/ 
    function toggleAccordion(clickedItem) {
      const allItems = document.querySelectorAll('#faq-container > div');
      allItems.forEach(item => {
        if (item !== clickedItem) {
          item.querySelector('p').classList.add('hidden');
          item.querySelector('.toggle-icon').src = './img/img-con/ic_faq_downarrow.svg';
        }
      });

      const content = clickedItem.querySelector('p');
      const icon = clickedItem.querySelector('.toggle-icon');

      const isOpen = !content.classList.contains('hidden');
      content.classList.toggle('hidden');
      icon.src = isOpen ? './img/img-con/ic_faq_downarrow.svg' : './img/img-con/ic_faq_rightarrow.svg';
    }
    
