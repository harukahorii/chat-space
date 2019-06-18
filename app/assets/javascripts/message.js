$(document).on('turbolinks:load', function(){
  $(function() {

    function buildMESSAGES(message) {

      image = (message.image) ? `<img class= "lower-message__image" src=${message.image} >` : "";

      var html = `<div class="message">
                    <div class="upper-message" data-id="${message.id}">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      ${image}
                    </div>
                  </div>`
      return html;
    }

    $('#new_message').on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data) {
        var html = buildMESSAGES(data);
        $('.messages').append(html)
        $('.new_message')[0].reset();
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
        $('.form__submit').attr('disabled', false);
      })
      .fail(function(){
        alert('error');
      })
    });

    var reloadMessages = (function() {
      var last_message_id = $('.mesaage').filter(":last").data("message-id");
      $.ajax({
        url: "/api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        
      })
      .fail(function(){
        console.log('error');
      })
    })

  });
});