export default function() {
  const darkButton = document.querySelector('.darkmode');

  darkButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-light');
    document.querySelector('.title').classList.toggle('has-text-white');
    document.querySelector('.subtitle').classList.toggle('has-text-white');
    document.querySelector('.hero-foot').classList.toggle('has-text-white');
  });
}