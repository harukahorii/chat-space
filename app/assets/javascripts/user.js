$(function() {

  var user_list = $(".chat-group-form__field.clearfix");

  function appendUser(user) {
    var html = `<p class="chat-group-user__name">${ user.name }</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</div>`
    user_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<p class="chat-group-user__name">${ msg }</p>`
    user_list.append(html);
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
      $(".chat-group-form__field.clearfix").empty();
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
  });
});