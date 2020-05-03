function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <=n; i++) {
      this[i] = 0;
    }
 }
 days = new MakeArray(7);
 days[0] = "Saturday"
 days[1] = "Sunday"
 days[2] = "Monday"
 days[3] = "Tuesday"
 days[4] = "Wednesday"
 days[5] = "Thursday"
 days[6] = "Friday"


 months = new MakeArray(12);
 months[1] = "January"
 months[2] = "February"
 months[3] = "March"
 months[4] = "April"
 months[5] = "May"
 months[6] = "June"
 months[7] = "July"
 months[8] = "August"
 months[9] = "September"
 months[10] = "October"
 months[11] = "November"
 months[12] = "December"

 function malecompute(form) {
    var ryde = parseInt(form.day.value, 10)
    if ((ryde < 0) || (ryde > 31)) {
       alert("Day doesnt exit")
    }
    var ryde2 = parseInt(form.month.value, 10)
    if ((ryde2 < 0) || (ryde2 > 12)) {
       alert("Month is out of range")
    }
    var ryde2x = parseInt(form.month.value, 10)
    var ryde3 = parseInt(form.year.value, 10)
    if (ryde3 < 1985) {
       alert("You're quite old!")
