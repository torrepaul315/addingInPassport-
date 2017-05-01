







$('.submit').on('click', function (e) {
    e.preventDefault();
    var blogPost = {}

    blogPost.title = $('.postTitle').val();
    blogPost.name = $('.author').val();
    blogPost.user_email = $('.email').val();
    blogPost.body = $('.body').val();
    console.log(blogPost);


    var excerptArray = blogPost.body.match(/[^?!\.]+[?!\.]+/g);
    console.log(excerptArray);
    if (excerptArray === null) {
      alert ("Hello and thanks for visitng!  Please submit some text for your blog post")
    }
    // console.log(excerptArray.length);
    else if(excerptArray.length < 3) {
      alert("would you mind making your blogpost just a little bit longer?")
    }
    else if (blogPost.name === '') {
      alert('thanks for your comment! could you please add your name to it prior to submission')
    }
    else if (blogPost.user_email === '') {
      alert ('Thank you for your comment!  Could you please add an email address?')
    }
    else {





    $.ajax({
      url: '/blogpost',
      type: 'POST',
      data: blogPost,
    })
    .then((data) => {
      console.log(data);
    //this other way of doing things didn't work either!
      window.location.href = 'index.html';
    })
    .catch((err) => {
    console.log(err)
    })
  }
})
