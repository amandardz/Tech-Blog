const comment = async () => {  

  const comment = document.querySelector('#comment-content').value.trim();

  if (comment) {
    console.log(comment)
    const response = await fetch(`/api/comments/posts`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 
        'Content-Type': 'application/json',
      },
    });

    if (response.ok){
      document.location.replace('/posts')
    } else {
      alert('Failed to add comment')
    }
  }
};

document
  .querySelector('#commentBtn')
  .addEventListener('click', comment())