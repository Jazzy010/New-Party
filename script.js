const joinForm = document.getElementById('joinForm');
const formMsg = document.getElementById('formMsg');

joinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = '✅ You are now in the Cockroach Praja Party action list. Toolkit arrives Friday.';
  joinForm.reset();
});
