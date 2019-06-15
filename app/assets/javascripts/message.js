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
                      <img class="lower-message__image" src="${message.image}" alt="Dsc01435">
                    </div>
                  </div>`
      return html;
    }
    $('.mesaages').animate({scrollTop: $('.mesaages').height()}, 1500);
    $('.form__submit').attr('disabled', false);
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
        $('.mesaages').append(html)
      })
      .fail(function(){
        alert('error');
      })
    });
  });
});