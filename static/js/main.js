// Triggers modal popover

!(function($) {
    function showModal(event) {
        event.preventDefault();
        var $target = $(event.currentTarget);
        var $modal = $('#artworkModal');
        var name = $target.data('name') || false;
        var description = $target.data('description') || false;

        $modal.find('#modalImg').attr('src', $target.data('img'));

        if (name) {
            $modal.find('#modalTitle').html(name);
        };
        if (description) {
            $modal.find('#modalDesc').html(description);
        };
        $modal.modal('show');
    }

    $(document).ready(function() {
        // Initialize modals
        if ($('.modal-trigger').length) {
            $(document).on('click', '.modal-trigger', showModal);
        }
    });
})(window.jQuery);
