$(document).on('turbolinks:load', function(){
  $(function() {

    function buildMESSAGES(message) {
      var html = `<div class="message">
                    <div class="upper-message">
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
                      <img class="lower-message__image" src="${message.image}" alt="">
                    </div>
                  </div>`
      return html;
    }
   
    
    $('#new_message').on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      console.log(url);
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data) {
        console.log(data);
        var html = buildMESSAGES(data);
        console.log(html)
        $('.messages').append(html)
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $('.form__submit').attr('disabled', false);
      })
      .fail(function(){
        alert('error');
      })
    });
  });
});