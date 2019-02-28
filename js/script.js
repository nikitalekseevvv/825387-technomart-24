      var linkMap = document.querySelector(".modal-contacts-map");
      var popupMap = document.querySelector(".modal-map");
      var closeMap = document.querySelector(".modal-close-map");
      var linkFeedback = document.querySelector(".modal-feedback-button");
      var popupFeedback = document.querySelector(".modal-feedback");
      var closeFeedback = document.querySelector(".modal-close-feedback");  
      var login = document.querySelector("[name=name-user]");
      var formFeedback = popupFeedback.querySelector(".feedback");
      var nameUserFeedback = popupFeedback.querySelector(".feedback-email");
      var emailFeedback = popupFeedback.querySelector(".feedback-name");  
      var textFeedback = popupFeedback.querySelector(".feedback-text"); 
<<<<<<< HEAD
      var buttonFeedback = popupFeedback.querySelector(".button");  
=======
>>>>>>> parent of 44cf88d... Разметка и стили завершены
      var linkBuy = document.querySelectorAll(".catalog-item-buy");
      var popupBuy = document.querySelector(".modal-buy");
      var closeBuy = document.querySelector(".modal-close-buy");  
      
      linkMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupMap.classList.add("modal-show");
      });

      closeMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupMap.classList.remove("modal-show");
      });

      linkFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupFeedback.classList.add("modal-show");
        login.focus();
      });

      closeFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-show");
        popupFeedback.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popupMap.classList.contains("modal-show")) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
          }
        }
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
        

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popupBuy.classList.contains("modal-show")) {
            evt.preventDefault();
            popupBuy.classList.remove("modal-show");
          }
        }
      });