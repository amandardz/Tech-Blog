const comment = async (event) => {  
  event.preventDefault();
  const comment = document.querySelector('#comment-content').value.trim();
  
  if (comment) {
    console.log(comment)
    const response = await fetch(`/api/comments/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_id: event.target.dataset.id, content: comment }),
      headers: { 
        'Content-Type': 'application/json',
      },
    });

    if (response.ok){
      document.location.reload()
    } else {
      alert('Failed to add comment')
    }
  }
};

const delComment = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('#commentForm')
  .addEventListener('submit', comment)

document
  .querySelectorAll('#comment-delete').forEach((delBtn) => {
    delBtn.addEventListener('click', delComment)
  })
