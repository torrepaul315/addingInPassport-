// need to- limit length of post to 3 sentences, and also insert the blog posts in chron order!



$(document).ready(function() {
  // alert('page has loaded');
  $.get('/blogpost')
  //  .then((result) => {
  //    console.log(result)
  //  })
    .then(renderPosts);


//   var movieArray
//
//   //this function breaks down the movie object into an array and then fires up the list building function
   function renderPosts(postInfo) {
 //as per jeff, add the index with the for each, so that each href in the generated list is unique! that way it loads the page with the additional info

     var chronological = postInfo.reverse()
     console.log(chronological);
     chronological.forEach((blogPost, i) => {

       var date = blogPost.blogpost_timestamp.slice(0,10);
         console.log(date);
         var time = blogPost.blogpost_timestamp.slice(11,16)
         console.log(time);
         var scrubbedTime = date + " at " + time;
         console.log(scrubbedTime);





      var excerptArray = blogPost.body.match(/[^?!\.]+[?!\.]+/g);
      console.log(excerptArray);
      var firstThreeSentences = excerptArray.slice(0,3);
      console.log(firstThreeSentences);
      var smoothedThree = firstThreeSentences[0].concat(firstThreeSentences[1],firstThreeSentences[2]);

      var individualPost = `
      <article>
        <header>
          <h1 class='bold'>${blogPost.title}</h1>
        </header>
        <footer class='time'>posted on: ${scrubbedTime}</footer>
        <div class="lead lighter">${smoothedThree}</div>
        <a class='read-more'href='blog.html?id=${blogPost.id}'>Read More</a>
      </article>
      <hr>`


      $('.bloglist').append($(individualPost));

     })

      //   var movieItem = `<tr class="movie-item" id=${film.id}>
      //  <td class='movie-show'><a href="./show.html?id=${i}">${film.title}</a></td>
      //   <td>${film.director}</td>
      //   <td>${film.year}</td>
      //  <td>${film.rating}</td>
      //   <td><button type="button" class="btn btn-primary delete ${film.title}">Delete Movie</button></td>
      //   <td><a type="button" class="btn btn-primary edit ${film.title}" href="./edit.html?id=${i}">Edit</a></td></tr>`;
    }
})
