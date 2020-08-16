document.getElementById('click').onclick = zodiac;
function zodiac(){
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
  let result = "Invalid date!";

const horoscopes = ['Images/Aquarius.png, Images/Aries.png, Images/Cancer.png, Images/Capricorn.png, Images/Gemini.png, Images/Leo.png, Images/Libra.png, Images/Pisces.png, Images/Sagittarius.png, Images/Scorpio.png, Images/Taurus.png, Images/Virgo.png']

  if ((month == 3 && day >=21) || (month == 04 && day <= 19)){
    result = ("You are an Aries!")
    document.getElementById('result').innerHTML=("You are an Aries")
    document.querySelector('.pics').innerHTML="<img src='Images/Aries.png'>"
    document.querySelector('.description').innerHTML="You know how to be a leader and a friend, finding that perfect balance between the two roles."
  }
  else if ((month == 04 && day >= 20) || (month ==05 && day <=20)){
    result = ("You are a Taurus!")
    document.getElementById('result').innerHTML=("You are a Taurus")
    document.querySelector('.pics').innerHTML="<img src='Images/Taurus.png'>"
    document.querySelector('.description').innerHTML="Taurus know how to make anyone feel special and loved. More than that, they knows how to reciprocate love like no one else can."
  }
  else if ((month == 05 && day >= 21) || (month ==06 && day <=20)){
    result = ("You are a Gemini!")
    document.getElementById('result').innerHTML=("You are a Gemini")
    document.querySelector('.pics').innerHTML="<img src='Images/Gemini.png'>"
    document.querySelector('.description').innerHTML="You brighten up a room whenever you walk in and when you leaves, people always find themselves missing you."
  }
  else if ((month == 06 && day >=21) || (month ==07 && day <= 22)){
    result = ("You are a Cancer!")
    document.getElementById('result').innerHTML=("You are a Cancer")
    document.querySelector('.pics').innerHTML="<img src='Images/Cancer.png'>"
    document.querySelector('.description').innerHTML="You always try to adapt to your surroundings. But even though you're always changing, you're is still as reliable as ever."
  }
  else if ((month == 07 && day >=23) || (month ==08 && day <=22)){
    result = ("You are a Leo!")
    document.getElementById('result').innerHTML=("You are a Leo")
    document.querySelector('.pics').innerHTML="<img src='Images/Leo.png'>"
    document.querySelector('.description').innerHTML="You tend to bring light wherever you go. You love being the center of attention, but also love sharing your happiness with everyone around."
  }
  else if ((month == 08 && day >=23) || (month ==09 && day <=22)){
    result = ("You are a Virgo")
    document.getElementById('result').innerHTML=("You are a Virgo")
    document.querySelector('.pics').innerHTML="<img src='Images/Virgo.png'>"
    document.querySelector('.description').innerHTML="You're an all-knowing person who stands strong and tall knowing that others look up to you as a leader."
  }
  else if ((month == 09 && day >=23) || (month ==10 && day <=22)){
    result = ("You are a Libra")
    document.getElementById('result').innerHTML=("You are a Libra")
    document.querySelector('.pics').innerHTML="<img src='Images/Libra.png'>"
    document.querySelector('.description').innerHTML="You will often go out of your way to take care of and please others."
  }
  else if ((month == 10 && day >=23) || (month ==11 && day <=21)){
    result = ("You are a Scorpio")
    document.getElementById('result').innerHTML=("You are a Scorpio")
    document.querySelector('.pics').innerHTML="<img src='Images/Scorpio.png'>"
    document.querySelector('.description').innerHTML="You love to love, always trying to win others over with nice words, surprises, and gifts. You want to make sure that your loved ones know you care for them tremendously."
  }
  else if ((month == 11 && day >=22) || (month ==12 && day <=21)){
    result = ("You are a Sagittarius")
    document.getElementById('result').innerHTML=("You are a Sagittarius")
    document.querySelector('.pics').innerHTML="<img src='Images/Sagittarius.png'>"
    document.querySelector('.description').innerHTML="You are a free spirit, always open to new experiences. You love the idea of not being held back by anything, and you actively seek exciting experiences."
  }
  else if ((month == 12 && day >=22) || (month ==01 && day <=19)){
    result = ("You are a Capricorn")
    document.getElementById('result').innerHTML=("You are a Capricorn")
    document.querySelector('.pics').innerHTML="<img src='Images/Capricorn.png'>"
    document.querySelector('.description').innerHTML="You are the the person with a wealth of knowledge and the one who can share this newfound knowledge with others. Being the one people look up to."
  }
  else if ((month == 01 && day >=20) || (month ==02 && day <=18)){
    result = ("You are a Aquarius")
    document.getElementById('result').innerHTML=("You are an Aquarius")
    document.querySelector('.pics').innerHTML="<img src='Images/Aquarius.png'>"
    document.querySelector('.description').innerHTML="You live life to the fullest, trying to bring as much color and excitement as you can to your experiences, and the people around you."
  }
  else if ((month == 02 && day >=19) || (month ==03 && day <=20)){
    result = ("You are a Pisces")
    document.getElementById('result').innerHTML=("You are a Pisces")
    document.querySelector('.pics').innerHTML="<img src='Images/Pisces.png'>"
    document.querySelector('.description').innerHTML="You always seem have your head in the clouds, but really you're dreaming of the bigger things in your life that you wish to accomplished."
  }
    else if (month >12 || day >31){
      alert("Invalid date! Please enter a correct date.");
    }
}
