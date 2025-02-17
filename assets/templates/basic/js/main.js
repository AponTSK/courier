'use strict';
(function ($) {
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    // // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 300) {
        $('.header').addClass('fixed-header');
      } else {
        $('.header').removeClass('fixed-header');
      }
    });
    // // ========================= Header Sticky Js End===================

    // //============================ Scroll To Top Icon Js Start =========
    var btn = $('.scroll-top');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, '300');
    });

    // ========================== Add Attribute For Bg Image Js Start =====================
    $('.bg-img').css('background-image', function () {
      var bg = 'url(' + $(this).data('background-image') + ')';
      return bg;
    });
    // ========================== Add Attribute For Bg Image Js End =====================

    // ================== Password Show Hide Js Start ==========
    $('.toggle-password').on('click', function () {
      $(this).toggleClass('fa-eye');
      var input = $($(this).attr('id'));
      if (input.attr('type') == 'password') {
        input.attr('type', 'text');
      } else {
        input.attr('type', 'password');
      }
    });
    // =============== Password Show Hide Js End =================

    // ========================= Select2 Js Start ============== //
    $('.select2').each((index, select) => {
      $(select).wrap('<div class="select2-wrapper"></div>').select2({
        dropdownParent: $(select).closest('.select2-wrapper')
      });
    });
    // ========================= Select2 Js end ============== //

    // ========================= Client Slider Js Start ===============

    $('.client-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed: 300,
      arrows: false,
      slidesToShow: 1,
      variableWidth: true,
      slidesToScroll: 1,
    });
    // ========================= Client Slider Js End ===================

    // ================== Sidebar Menu Js Start ===============

    // Sidebar Dropdown Menu Start
    $('.has-dropdown > a').on('click', function () {
      $(this).next('.sidebar-submenu').slideToggle(200);
      $(this).parent().toggleClass('active');
    });
    // Sidebar Dropdown Menu End

    // Sidebar Icon & Overlay js

    function sidebarControll(barIcon, closeBtn, sidebar) {
      $(`.${barIcon}`).on('click', function () {
        $(`.${sidebar}`).addClass('show-sidebar');
        $('.sidebar-overlay').addClass('show');
      });
      $(`.${closeBtn}, .sidebar-overlay`).on('click', function () {
        $(`.${sidebar}`).removeClass('show-sidebar');
        $('.sidebar-overlay').removeClass('show');
      });
    }

    sidebarControll('navigation-bar', 'sidebar-menu__close', 'sidebar-menu')
    sidebarControll('setting-body-bar', 'setting-nav-close', 'setting-sidebar')

    // Sidebar Icon & Overlay js
    // ===================== Sidebar Menu Js End =================

    // ========================= Odometer Counter Up Js End ==========
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    // ========================= Odometer Up Counter Js End =====================

    // header height
    let headerHeight = $('.dashboard-header').innerHeight();
    $(':root').css('--dh-h', headerHeight + 'px');

    // tooltip initilzation
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // ========================= Payment Gateway===================== //
    $(".payment-item__btn").on("click", function (e) {
      let paymentList = $(".payment-system-list");
      paymentList.css({
        paddingRight: '12px',
      })
      paymentList.find(".gateway-option").removeClass("d-none");
      $(this).addClass('d-none')
      paymentList.animate({
        scrollTop: (paymentList.height() - 60)
      }, 'slow');
    });

    // date picker
    $(".datepicker2").flatpickr({
      dateFormat: "Y-m-d",
    });

    // chart js
    if (document.getElementById('profileViewChart')) {
      const profileViewChart = document.getElementById('profileViewChart');
      const profileViewChartCtx = profileViewChart.getContext('2d');

      const data = {
        datasets: [{
          label: 'Course Overview',
          data: [11, 24, 26, 39],
          backgroundColor: [
            '#4A3AFF',
            '#962DFF',
            '#E0C6FD',
            '#C6D2FD',
          ],
          borderWidth: 0
        }]
      };

      const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
            }
          }
        }
      };

      new Chart(profileViewChartCtx, config);
    }
    // chart js end

  });

  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);


