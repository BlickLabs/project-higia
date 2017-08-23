(function () {

  // Set the scroll to 0 at the time of opening the modal.
  $(document).on('opening', '.remodal', function () {
    $('.remodal-wrapper').scrollTop(0)
  });
})();
