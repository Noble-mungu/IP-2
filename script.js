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

 maleakannames = new MakeArray(7);
maleakannames[0]= "kwame"
maleakannames[1]= "kwasi"
maleakannames[2]= "kwadwo"
maleakannames[3]= "kwabena"
maleakannames[4]= "kwaki"
maleakannames[5]= "yaw"
maleakannames[6]= "kwame"


femaleakannames = new MakeArray(7);
femaleakanname[0]= "Ama"
femaleakanname[1]= "Akosua"
femaleakanname[2]= "Adwoa"
femalakanname[3]= "Abenaa"
femaleakanname[4]= "Akua"
femaleakanname[5]= "yaw"
femaleakanname[6]= "Afua"


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

       if (val2 == 1) {
    ryde2x = 13;
    ryde3 = ryde3-1
 }
 if (ryde2 == 2) {
   ryde2x = 14;
    ryde3 = ryde3-1
 }
 var ryde4 = parseInt(((val2x+1)*3)/5, 10)
 var ryde5 = parseInt(ryde3/4, 10)
 var ryde6 = parseInt(ryde3/100, 10)
 var ryde7 = parseInt(val3/400, 10)
 var ryde8 = ryde1+(ryde2x*2)+ryde4+ryde3+ryde5-ryde6+ryde7+2
 var ryde9 = parseInt(ryde8/7, 10)
 var ryde0 = ryde8-(val9*7)
 form.result1.value = months[ryde2]+" "+form.day.value +", "+form.year.value
 form.result2.value = femaleakannames [ryde0]
}
