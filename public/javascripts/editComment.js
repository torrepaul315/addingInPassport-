//getting close! just need to do a solid join tab


$(document).ready(function() {
    //  console.log('linked');

getUrlParameter('id');
// console.log(returner);
  // $.get('/movies')
  //  .then(renderMovies);
  //
  // var movieArray
});

var authorInfo

var returner

var email

var blogPost

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  // var returner;

  sURLVariables.forEach((paraName) => {
    const sParameterName = paraName.split('=');
    if (sParameterName[0] === sParam) {
      returner = sParameterName[1] === undefined ? false : sParameterName[1];
    }
  });
  console.log('id:', returner);

  renderComments(returner);
}

function renderComments(returner) {
  $.ajax({
      method: 'GET',
      url: '/comment/join/' + returner,
    })
    .then((commentInfo) => {
      console.log(commentInfo);
      var commentScrub = commentInfo[0];
      console.log(commentScrub);
      $('.authorEdit').val(commentScrub.name);
      $('.commentEdit').val(commentScrub.body);
      blogPost = commentScrub.blogpost_id

    }).catch((err) => {
      console.log(err)
    })
}

$('.submit').on('click', function (e) {
    // console.log('button works 2');
    e.preventDefault();
    var commentEdit = {};

    commentEdit.body = $('.commentEdit').val();

    // console.log(authorInfo.);

    $.ajax({
      url: '/comment/' + returner,
      type: 'PUT',
      data: commentEdit,
    })
    .then((data) => {
      window.location='blog.html?id=' + blogPost;
      console.log(data);
    })
    .catch((err) => {
    console.log(err)
    })






});
