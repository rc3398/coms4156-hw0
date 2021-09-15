$(document).ready(function () {
  // jQuery stuff here
  const $userName = 'John Cena';
  const $userHandle = '@johncena';
  let $characters_remaining = 30;

  $('#characters_remaining').html($characters_remaining);

  // Keyup - fires when the user releases a key
  $('#tweetForm').keyup(function (e) {
    var $charCount = $(this).val().length;
    $('#count1').text($charCount);
    $('#characters_remaining').text(30 - $charCount);

    if ($charCount > 30) {
      $('#characters_remaining').addClass('overCharLimit');
      $('#postTweetBtn').prop('disabled', true);
      $('#postTweetBtn').addClass('btn-light');
    } else {
      $('#characters_remaining').removeClass('overCharLimit');
      $('#postTweetBtn').prop('disabled', false);
      $('#postTweetBtn').removeClass('btn-light');

      if (e.keyCode == 13) {
        $('#postTweetBtn').trigger('click');
      }
    }
  });

  $('#postTweetBtn').on('click', function () {
    PostTweet();
  });

  function PostTweet() {
    let $tweetContent = $('#tweetForm').val();
    const $tweetContentSpacing = '     ';

    if (IsWhiteSpaceOnly($tweetContent)) {
      return;
    }

    $characters_remaining = 30;
    $('#characters_remaining').html($characters_remaining);
    $('#tweetsContainer').prepend('<li class="list-group-item">' + '<span class="twtrUserHandle">' + $userName + '   ' + $userHandle + '</span>' + $tweetContentSpacing + '<span class="twtrTweets">' + $tweetContent + '</span>' + '</li>');
    $('#tweetForm').val('');
    $('#tweetForm').focus().val($('#tweetForm').val());
    $('#tweetForm').focus();
  }
});

function IsWhiteSpaceOnly(tweetContent) {
  if (!tweetContent.replace(/\s/g, '').length) {
    console.log('this string ONLY contains whitespace (ie. spaces, tabs, line breaks)');
    return true;
  }
}
