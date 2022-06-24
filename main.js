const fixBug = document.querySelector('bug-here');
document.addEventListener('DOMContentLoaded', () => {
  for (let bug = 0; bug < 5; bug += 1) {
    const thisBug = document.createElement('div');
    thisBug.innerHTML = `<div class="para">
    <p>It's been a long week and I really want you to know that I enjoyed collaborating with 
        you on our corporate achievement for this week. 
    </p>
    <p>I hope we meet again soon and wish you the very best.</p>
    <p>While I feel greatly impressed with your calmness, resourcefulness, professionalism and adept skills,
        Microverse has required that we finish the week with this bug hunting spree.<br>
        Here are a few tips though:
    </p>
    <ul>
      <li>I should have about 5 more similar divs below and I have used JavaScript Object to create them.</li>
      <li>I had used loops for the creation</li>
      <li>You can only read this just when you fix this except with the Developer Tools</li>
    </ul><br>
    <p>Can you find my bug please?</p>
  </div>`;
  fixBug.appendChild(thisBug);
  }
})

