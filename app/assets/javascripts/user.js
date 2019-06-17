$(function() {

  var user_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix" id='chat-group-user-${user.id}'>
                  <p class="chat-group-user__name">${ user.name }</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</div>
                </div>`
    user_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix" id='chat-group-user-${user.id}'>
                  <p class="chat-group-user__name">${ msg }</p>
                </div>`
    user_list.append(html);
  }

  function buildHTML(id, name) {
    var html = `<div class="chat-group-user clearfix js-chat-member" id="chat-group-user-${id}">
                  <input name="group[user_ids][]" type="hidden" value="${id}">
                  <p class="chat-group-user__name">${ name }</p>
                  <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}">削除</div>
                </div>`
    return html
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-resul").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーはありません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })

    $("#user-search-result").on('click', '.user-search-add', function() {
      var id = $(this).data('user-id');
      var name = $(this).data('user-name');
      var addHTML = buildHTML(id, name);
      $('#chat-group-users').append(addHTML);
      $(this).parent('.chat-group-user').remove();
    })

    $("#chat-group-users").on('click', '.user-search-remove', function() {
      var id = $(this).data('user-id');
      $(`#chat-group-user-${id}`).remove();
    })
  });
});