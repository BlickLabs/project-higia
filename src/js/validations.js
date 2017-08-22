(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 1,
        maxlength: 500
      }
    }
  })
})();