# My Test Project

<script>
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write('<p class="text-centered">' + today + '</p>');
</script>
<span class="text-centered">Jacob Heftmann</span>