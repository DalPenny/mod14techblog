const blogpostFormHandler = async (event) => {
  event.preventDefault();

  const blogpostid = document.getElementsByName('#post-id');

  console.log(`post-id : ${blogpostid}`);

  if (blogpostid) {

    const response = await fetch(`/blogpost/${blogpostid}`,
      {
        method: 'GET',
      });

    if (response.ok) {
      alert('BlogPost response OK ');
      return;
      // document.location.replace('/');
    } else {
      alert('Did not connect to BlogPost');
    }
  }
};




document.querySelector('#postid').addEventListener('click', blogpostFormHandler);