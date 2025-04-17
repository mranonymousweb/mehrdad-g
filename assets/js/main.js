const htmlTag = document.documentElement,
  bodyTag = document.body;

// Modal
const btnModals = document.querySelectorAll('[data-toggle="modal"]');

if (btnModals.length > 0) {
  btnModals.forEach((btnModal) => {
    btnModal.addEventListener("click", (ev) => {
      const el = ev.currentTarget,
        id = el.dataset.target,
        content = document.querySelector(id);

      const backdrop = document.createElement("div");
      backdrop.classList.add("modal-backdrop");
      backdrop.style.opacity = 0;

      if (content) {
        content.classList.add("opened");
        bodyTag.appendChild(backdrop);
        htmlTag.classList.add("overflow-hidden");

        setTimeout(() => {
          backdrop.style.opacity = 1;
        }, 5);
      }
    });
  });

  window.addEventListener("click", (ev) => {
    const el = ev.target;

    if (
      el.classList.contains("modal-dialog") ||
      el.classList.contains("modal-close") ||
      el.closest(".modal-close")
    ) {
      const backdrop = document.querySelector(".modal-backdrop");
      htmlTag.classList.remove("overflow-hidden");

      document.querySelector(".modal.opened").classList.remove("opened");

      backdrop.style.opacity = 0;

      setTimeout(() => {
        backdrop.remove();
      }, 300);
    }
  });
}

// Scroll Down
const btnsScrollDown = document.querySelectorAll("[data-scroll]");

if (btnsScrollDown.length > 0) {
  btnsScrollDown.forEach((btnScroll) => {
    btnScroll.addEventListener("click", (ev) => {
      const el = ev.currentTarget,
        content = document.querySelector(el.dataset.scroll);

      if (content) {
        content.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Nav Responsive
const btnNav = document.querySelector(".top-header-btn-nav"),
  navResposnive = document.querySelector(".nav-responsive"),
  closeNavResponsive = document.querySelectorAll(
    ".nav-responsive-backdrop,.nav-responsive-close"
  );

if (btnNav && navResposnive && closeNavResponsive) {
  btnNav.addEventListener("click", () => {
    navResposnive.classList.add("opened");
  });

  closeNavResponsive.forEach((close) => {
    close.addEventListener("click", () => {
      navResposnive.classList.remove("opened");
    });
  });
}

// Footer Scroll
const btnScrollFooter = document.querySelector(".footer-scroll");

if (btnScrollFooter) {
  btnScrollFooter.addEventListener("click", () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  });
}

// Select Two
const selectTwo = document.querySelectorAll(".select-two");

if (selectTwo.length > 0) {
  selectTwo.forEach((select) => {
    NiceSelect.bind(select);
  });
}

if ($("input.date").length > 0) {
  $(".date").pDatepicker({
    initialValue: false,
    format: "YYYY/MM/DD",
  });
}

$(".detail-blog-content .list ul li a").click((ev) => {
  ev.preventDefault();

  const el = ev.currentTarget;
  content = $(el.hash);

  if (content.length > 0) {
    content[0].scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// List Detail Blog
const listsDetailBlog = $(".detail-blog-content ul");

if (listsDetailBlog.length > 0) {
  listsDetailBlog.height(listsDetailBlog[0].scrollHeight);
}

$(".detail-blog-content .list-title").click((ev) => {
  const el = ev.currentTarget,
    lists = $(el).next();

  $(el).toggleClass("close");

  if ($(el).hasClass("close")) {
    lists.height(0);
  } else {
    lists.height(lists[0].scrollHeight);
  }
});

// Quantity
$(".quantity .increment").click((ev) => {
  const input = $(ev.currentTarget).next(),
    value = input.val();

  input.val(Number(value) + 1);
});

$(".quantity .decrement").click((ev) => {
  const input = $(ev.currentTarget).prev(),
    value = input.val();

  value > 1 && input.val(Number(value) - 1);
});

// Nav Panel
$(".panel-header-mobile-btn-nav").click(() => {
  $(".panel-sidebar").addClass("opened");
});

$(".panel-sidebar-backdrop,.panel-sidebar-close").click(() => {
  $(".panel-sidebar").removeClass("opened");
});

// Length Word Textarea
const wordLength = $(".length-word").text().split("/")[1];

$(".length-word")
  .prev()
  .keyup((ev) => {
    const el = ev.target,
      { value } = el,
      lengthWord = $(el).next();

    if (value.length > Number(wordLength)) {
      $(el).val(value.slice(0, wordLength));
    } else {
      lengthWord.text(`${value.length}/${wordLength}`);
    }
  });

// Text New Ticket
$(".panel-detail-ticket-send .form-control").keyup((ev) => {
  const el = ev.target;

  el.style.height = "58px";
  if (el.scrollHeight > 58) el.style.height = el.scrollHeight + "px";
});

// Href
$("[data-href]").click((ev) => {
  const el = ev.currentTarget,
    { href } = el.dataset;

  window.location.assign(href);
});

// File Name
$(".uploader-file-input").change((ev) => {
  const el = ev.target,
    file = el.files[0];

  if (file) {
    $(".uploader-file-label").text(file.name);
  } else {
    $(".uploader-file-label").text("فایلی انتخاب نشده است");
  }
});

// Show Password
$("[data-show-password]").click((ev) => {
  const el = ev.currentTarget,
    input = $($(el).data("show-password"));

  if (input.attr("type") === "password") {
    $(el).first().removeClass("icon-eye-off").addClass("icon-eye");
    input.attr("type", "text");
  } else {
    $(el).first().removeClass("icon-eye").addClass("icon-eye-off");
    input.attr("type", "password");
  }
});

// Auth Dropdown
$(".top-header-auth-box-info").click((ev) => {
  window.outerWidth > 992 && ev.preventDefault();

  const el = ev.currentTarget,
    dropdown = $(el).next();

  window.outerWidth > 992 && dropdown.toggleClass("opened");
});

$(window).click((ev) => {
  const el = ev.target;

  if (!el.closest(".top-header-auth-dropdown") && !el.closest(".top-header-auth-box")) {
    $(".top-header-auth-dropdown").removeClass("opened");
  }
});

// ===> Start Swipers

// Swiper Home
const swiperHome = document.querySelector(".swiper-home");

if (swiperHome) {
  new Swiper(".swiper-home", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

// Swiper Categories
const swiperCategories = document.querySelector(".swiper-categories");

if (swiperCategories) {
  new Swiper(".swiper-categories", {
    slidesPerView: "auto",
    spaceBetween: 10,
    on: {
      slideChange: (swiper) => {
        swiper.update();
      },
    },
  });
}

// Swiper Related Articles
const swiperRelatedArticles = document.querySelector(
  ".swiper-related-articles"
);

if (swiperRelatedArticles) {
  new Swiper(".swiper-related-articles", {
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 12,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

const swiperPanelProposal = document.querySelector(".swiper-panel-proposal");

if (swiperPanelProposal) {
  new Swiper(".swiper-panel-proposal", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}
