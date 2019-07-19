<script>
const d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dd = String(d.getDate()).padStart(2, '0');
console.log("dd: " + dd);
var dateFormatted = monthNames[d.getMonth()] + dd;
</script>

# Every Photo<br>Taken Between<br>July 10 and <script>document.write(dateFormatted);</script>

This site takes a [Small Victories](https://www.smallvictori.es/) Feed and uses [Bindery.js](https://evanbrooks.info/bindery/) to automatically turn every iPhone photo I take into a formatted book.
