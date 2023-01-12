$(document).ready(function() {
    $('#chatbot-form').submit(function(event) {
        event.preventDefault();
        const message = $('#chatbot-input').val();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/chatbot',
            data: {
                message: message
            },
            success: function(response) {
                $('chatbot-response').text(response.text);
            }
        })
    })
})