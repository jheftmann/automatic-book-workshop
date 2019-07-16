<span class="title-section"></span>

<script>
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var month = monthNames[today.getMonth()];

today = month + ' ' + dd + ', ' + yyyy;
document.write('<p class="text-centered align-top text-reverse">' + today + '</p>');
</script>

<h1>
  <span style="transform: scaleX(-1);display: inline-block;">Automatic</span>
  Book
  <span class="text-primary">Workshop</span>
</h1>

<span class="text-centered align-bottom text-reverse">Jacob Heftmann</span>

<span class="page-break"></span>
