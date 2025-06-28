const counter = document.getElementById('counter');

let count = 0; 
let timer = setInterval(incrementCounter, 1000); 

function incrementCounter() {
  count++;
  counter.textContent = count;
}

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

plusBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

const heartBtn = document.getElementById('heart');
const likesList = document.querySelector('.likes');

const likesRecord = {}; 

heartBtn.addEventListener('click', () => {
  if (likesRecord[count]) {
    likesRecord[count]++;
    const existingLi = document.getElementById(`like-${count}`);
    existingLi.textContent = `${count} has been liked ${likesRecord[count]} times`;
  } else {
    likesRecord[count] = 1;
    const li = document.createElement('li');
    li.id = `like-${count}`;
    li.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  }
});

const pauseBtn = document.getElementById('pause');

pauseBtn.addEventListener('click', () => {
  if (pauseBtn.textContent === 'pause') {
    clearInterval(timer);
    pauseBtn.textContent = 'resume';
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;

  } else {
    timer = setInterval(incrementCounter, 1000);
    pauseBtn.textContent = 'pause';
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
  }
});

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const commentText = commentInput.value;

  if (commentText.trim() !== '') {
    const p = document.createElement('p');
    p.textContent = commentText;
    commentsList.appendChild(p);
    commentInput.value = ''; 
  }
});

