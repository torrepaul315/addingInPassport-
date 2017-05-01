

// A button to submit the edit of the blog post

//talk to danny/issac/vincent on the flow of this js...I'm now up to 2 globals....should I continue to do the next json call in the .then or is there a smarter way to spin it out to another function.....think.....perhaps call a different function than renderData?(passing the first result along, then add in the name, and pass both at that point to renderData? hmmmm! )
var email

var returner

var blogPost

var authorInfo

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


  $.ajax({
      method: 'GET',
      url: '/blogpost/' + returner,
    })
    .then((blogArray) => {
      console.log(blogArray)

// not sure of best practice here, but now need to take the email out of the first request, to then send a second request for the user info
//can either get the user, or alter the route to just get back the name

      email = blogArray[0]['user_email']
      $.ajax({
        method: 'GET',
        url: '/user/' + email,
      })
      .then((authorInfo) => {
        console.log(authorInfo);
        renderAuthor(authorInfo);
      })


      renderData(blogArray);

    })
    .catch((err) => {
      console.log(err)
    })


// return returner;
}

$(document).ready(function() {
    //  console.log('linked');

getUrlParameter('id');
// console.log(returner);
  // $.get('/movies')
  //  .then(renderMovies);
  //
  // var movieArray
});


// you have the body and the title, but need to add in another ajax get to the 'user' database in order to get the author name!
function renderData(info) {
  blogPost = info[0];
  console.log(blogPost);

  $('.title-edit').val(blogPost.title);
  // $('.director-edit').val(blogPost.);
  $('.body-edit').val(blogPost.body);
}
function renderAuthor(authorInfo) {
  // console.log(authorInfo);
  var author = authorInfo[0]['name'];
  var email = authorInfo[0]['email'];
  // console.log(author);
  $('.author-edit').val(author);
  $('.email-edit').val(email);

}

$('.submit').on('click', function (e) {
    // console.log('button works 2');
    e.preventDefault();


    blogPost.title = $('.title-edit').val();
    blogPost.author = $('.author-edit').val();
    blogPost.email = $('.email-edit').val();
    blogPost.body = $('.body-edit').val();
    // console.log(authorInfo.);
    console.log(blogPost.title);
    $.ajax({
      url: '/blogpost/' + returner,
      type: 'PUT',
      data: blogPost,
    })
    .then((data) => {
      console.log(data);
      window.location='blog.html?id=' + returner;
    })
    .catch((err) => {
    console.log(err)
    })






});
