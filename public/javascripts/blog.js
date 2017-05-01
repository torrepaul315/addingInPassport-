/*
stuff left to do:
1- wipe the comment fields when a comment was submitted
2- after wipe, insert the just added comment to the list of comments on the site
3-styling!
4- the blogpost space also submits when you click on it.....wtf!

*/

var returner

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
  // console.log('id:', returner);

  renderComments(returner);

  $.ajax({
      method: 'GET',
      url: '/blogpost/' + returner,
    })
    .then((blogArray) => {
      // renderData(blogArray);
      var email = blogArray[0]['user_email']
      $.ajax({
        method: 'GET',
        url: '/user/' + email,
      })
      .then((authorInfo) => {
        // console.log(authorInfo);
        // renderAuthor(authorInfo)
        renderData(blogArray, authorInfo);
        ;
      })
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

function renderData(blogArray,authorInfo) {
  const blogPost = blogArray[0];
  // console.log(blogPost);
  // console.log(blogPost.title);
  // console.log(blogPost.body);
  var author = authorInfo[0]['name'];
  var date = blogPost.blogpost_timestamp.slice(0,10);

  var time = blogPost.blogpost_timestamp.slice(11,16)

  var scrubbedTime = date + " at " + time;
  console.log(scrubbedTime);



var individualPost = `
<article>
  <header>
    <h2>${blogPost.title}</h2>
  </header>
  <h4 class='author'>Written by: ${author}</h4>
  <footer class='time'>posted on: ${scrubbedTime}
  </footer>
  <div class="lead">${blogPost.body}</div>
  <div class='text-center'>
    <button type="button" class="btn btn-warning edit"><a href='editBlog.html?id=${blogPost.id}'>Edit Blogpost</a></button>
    <button type="button" class="btn btn-default delete"id='${blogPost.id}'>
    Delete Blogpost</button>
  </div>

</article>
`
$('.bloglist').append($(individualPost));



  // console.log(author);


}

function renderComments(info) {
  console.log(info);
    $.ajax({
      method: 'GET',
      url: '/comment/' + info,
    })
    .then((commentsObj) => {
      // console.log(commentsObj);
      var comments = commentsObj[0]['body'];
      // console.log(comments);
      commentsObj.forEach((comment) => {
//once functionality is there- create a better constructor where each comment is its own bootstrap row and the buttons are inputted into a column to the left of the comment!
       var indivComment = `
       <article>
        <header>
          <h2>${comment['body']}</h2>
        </header>
        <div class='text-center'>
          <button type="button" class="btn btn-warning edit">
            <a href='editComment.html?id=${comment.id}'>Edit Comment
            </a>
          </button>
          <button type="button" class="btn btn-default deleteComment"id='${comment.id}'>
          Delete Comment</button>
        </div>`
       $('.commentlist').append($(indivComment));
     })

    }).catch((err) => {
     console.log(err)
  });
}
$(document).on('click', '.deleteComment', function (e){
  console.log(this.id);
 e.preventDefault();
 $.ajax({
   method: 'DELETE',
   url: '/comment/'+ this.id
 })
   .then((data) => {

     $('.commentlist').html('');
     renderComments(returner)
     console.log(data);

   })
   .catch((err) => {
   console.log(err)
   })

})





$(document).on('click', '.delete', function (e) {
    //  console.log('button works '+ returner);
    e.preventDefault();

    $.ajax({
      method: 'DELETE',
      url: '/blogpost/' + returner,
    })
      .then((data) => {
        window.location='index.html';
        console.log(data);

      })
      .catch((err) => {
      console.log(err)
      })
});

$('.commentAdd').on('click', (e) => {
  e.preventDefault();


  var newComment = {};
  // does the object name matter?
  newComment.name = $('.authorComment').val();
  newComment.body = $('.commentText').val();
  console.log(newComment.body.length);
  newComment.user_email = $('.emailComment').val();
  newComment.blogpost_id = returner;
  // newComment.blogpost_id
  console.log(newComment.name, newComment.body, newComment.user_email, returner);
  if (newComment.body.length < 20) {
    alert("please add a comment before submitting")
  }
  else if (newComment.name === '') {
    alert('thanks for your comment! could you please add your name to it prior to submission')
  }
  else if (newComment.user_email === '') {
    alert ('Thank you for your comment!  Could you please add an email address?')
  }
  else {
  $.ajax({
    method: 'POST',
    url: '/comment',
    data: newComment
  })
    .then((data) => {
      console.log(data);
      $('.authorComment').html('');
      $('.commentText').html('');
      $('.emailComment').html('');





      $('.commentlist').html('');

      renderComments(returner);

    })
    .catch((err) => {
      alert('there was a problem submitting your comment')
    console.log(err)
    })

  }
})

//how to get to the edit blog page with the right info- make use of the id extractor?
// $(document).on('click', '.edit', function (e) {
//     e.preventDefault();
//      console.log('edit button works');
    // var movie = $(this).closest(".movie-item");
    // console.log(movie);
    // var id = movie.attr('id');
    // console.log(id);
    // $.ajax({
    //   method: 'GET',
    //   url: '/movies/' + id
    // })
    // .then((response) => {
    //   console.log(response);
    //   //need to move to the edit page
    //   location.replace('./edit.html')
    //   //need to move to
    //
    //
    //
    //
    // })
    // .catch((err) => {
    //   ALERT(err);
    // })
  // })
  // $(document).on('click' , '.delete', function (e) {
  //  console.log('button works ');
  // e.preventDefault();
  //
  // var movie = $(this).closest(".movie-item");
  // console.log(movie);
  // var id = movie.attr('id');
  // console.log(id);
  // $.ajax({
  //   method: 'DELETE',
  //   url: '/movies/' + id
  // })
  //   .then((data) => {
  //     console.log(data);
  //       movie.remove()
  //   })
  //   .catch((err) => {
  //   console.log(err)
  //   })
  // });
