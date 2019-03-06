      var linkMap = document.querySelector(".modal-contacts-map");
      var linkFeedback = document.querySelector(".modal-feedback-button");
      var linkBuy = document.querySelectorAll(".catalog-modal-buy");
     
      
      if (linkMap) {
        var popupMap = document.querySelector(".modal-map");
        var closeMap = document.querySelector(".modal-close-map");
         linkMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupMap.classList.add("modal-show");
      });


      closeMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupMap.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popupMap.classList.contains("modal-show")) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
          }
        }
      });
    }

    if (linkFeedback) {
      
      var popupFeedback = document.querySelector(".modal-feedback");
      var closeFeedback = document.querySelector(".modal-close-feedback");  
      var formFeedback = popupFeedback.querySelector(".feedback");
      var nameUserFeedback = popupFeedback.querySelector(".feedback-name");
      var emailFeedback = popupFeedback.querySelector(".feedback-email");  
      var textFeedback = popupFeedback.querySelector(".feedback-text"); 
      var buttonFeedback = popupFeedback.querySelector(".button");

      linkFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupFeedback.classList.add("modal-show");
        nameUserFeedback.focus();
      });

      closeFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-show");
        popupFeedback.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popupFeedback.classList.contains("modal-show")) {
            evt.preventDefault();
            popupFeedback.classList.remove("modal-show");
            popupFeedback.classList.remove("modal-error");
          }
        }
      });

      formFeedback.addEventListener("submit", function (evt) {
        if (!nameUserFeedback.value || !emailFeedback.value || !textFeedback.value) {
          evt.preventDefault();
          buttonFeedback.classList.remove("modal-error");
          buttonFeedback.offsetWidth = buttonFeedback.offsetWidth;
          buttonFeedback.classList.add("modal-error");
        }
      });

    }

    if (linkBuy) {
      var popupBuy = document.querySelector(".modal-buy");
      var closeBuy = document.querySelector(".modal-close-buy");  
      var buttonBuy = document.querySelector(".button-buy");

      for (var i = 0; i < linkBuy.length; i++) {
        linkBuy[i].addEventListener("click", function (evt) {
          evt.preventDefault();
          popupBuy.classList.add("modal-show");
        });
      }

      closeBuy.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupBuy.classList.remove("modal-show");
      });

      buttonBuy.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupBuy.classList.remove("modal-show");
      });
        
      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popupBuy.classList.contains("modal-show")) {
            evt.preventDefault();
            popupBuy.classList.remove("modal-show");
          }
        }
      });

    }
