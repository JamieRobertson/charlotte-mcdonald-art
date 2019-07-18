// Triggers modal popover

!(function($) {
    function showModal(event) {
        event.preventDefault();
        var $target = $(event.currentTarget);
        var $modal = $('#artworkModal');

        $modal.find('#modalImg').attr('src', $target.data('img'));
        $modal.find('#modalTitle').html($target.data('name'));
        $modal.modal('show');
    }

    $(document).ready(function() {
        // Initialize modals
        if ($('.modal-trigger').length) {
            $(document).on('click', '.modal-trigger', showModal);
        }
    });
})(window.jQuery);
