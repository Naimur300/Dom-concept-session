


const quotes = [
  {
    quote: "There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa bihamdi, SubhanAllahi al-azeem (Glorified is Allah and praised is He, Glorified is Allah the Most Great).",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "A man came to the Messenger of Allah (ﷺ) and said, “O Messenger of Allah! Who among the people has the most right to my good company?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Then your father.”",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "Beware of suspicion for it is the most untruthful type of speech.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "A slave [of Allah] may utter a word without giving it much thought by which he slips into the fire a distance further than that between east and west.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "Allah becomes jealous [of His honor] and that is when the believer does something He has forbidden.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "Whoever stands [for night prayer] in Ramadan out of faith and hope for reward will be forgiven his past sins.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "One Umrah to the next is an expiation for whatever happened between them and the only reward for an accepted Hajj is paradise.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "Yawning is from the devil so whenever one of you yawns, then let him try to suppress it as much as possible.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "The one who looks after a widow or poor person is like the one who strives in the cause of Allah – and I think he also said – he is like the one who continuously stands for prayer without slacking and fasts without breaking.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "No fatigue, illness, worry, sorrow, harm, grief, or even the prick of a thorn afflicts a Muslim except that Allah expiates some of his sins by it.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "A Muslim has five rights on another Muslim 1 – Return the greeting of salam 2 – Visiting the sick 3 – Following the funeral  4 – Accepting an invitation 5 – Saying Yarhamuka Allah (God have mercy on you) to the one who sneezes",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "The fire is surrounded by [unlawful] desires and paradise by difficulties.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "If you said to your companion on Friday [during Jumu’ah prayer], “Listen!”, while the imaam is giving the sermon, then you’ve erred [by engaging in idle talk].",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "If I did not fear difficulty for my nation, then I would have commanded them to use the siwaak before every prayer.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "Isn’t the one who raises his head before the imaam [during prayer] afraid that Allah may change his head to that of a donkey?",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "Whenever someone goes to the mosque in the morning or evening, Allah prepares for him a place in paradise.",
    person: "(Bukhari and Muslim)"
  },
  {
    quote: "The signs of a hypocrite are three: 1 – When he speaks, he lies 2 – When he’s trusted, he betrays 3 – When he promises, he breaks it",
    person: "(Bukhari)"
  },
  {
    quote: "Whatever of the lower garment falls below the ankles is in the fire.",
    person: "(Bukhari)"
  },
  {
    quote: "The angels continue to pray for one of you as long as he remains in his place of prayer provided he does not break his ablution. The angels say, “O Allah! Forgive him. O Allah! Have mercy on him.“",
    person: "(Bukhari)"
  },
  {
    quote: "Every person from my nation will enter paradise except the one who refuses.” They asked, “O Messenger of Allah, and who will refuse?” He (ﷺ) replied, “Whoever obeyed me, then he entered paradise. Whoever disobeyed me, then he refused",
    person: "(Bukhari)"
  },
  {
    quote: "If a man said to his [Muslim] brother, “O Kaafir (disbeliever)”, then that [statement] will return to one of them.",
    person: "(Bukhari)"
  },
  {
    quote: "Allah is more joyous with the repentance of one of you than you are when you find your lost animal.",
    person: "(Muslim)"
  },


];



document.getElementById('btn-gen').addEventListener('click' , function(){
    const p = document.getElementById('p-quote');
    const p2 =  document.getElementById('p-Person');
    const randomQuote = Math.floor(Math.random() * quotes.length)
  


    p.innerText = quotes[randomQuote].quote;
    p2.innerText = quotes[randomQuote].person;

})