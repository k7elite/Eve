let quotes = [
    {quote:'Jesus did not have pity on people, He had compassion.',
year:'2023'},
{quote:`The small little naive girl is all grown and continues to witness Gods favor and grace over her. 
(Isaiah 25:1) O LORD, you are my God I will exalt you and praise your name, for in perfect faithfulness you have done marvelous things, things planned long ago.
Happy birthday to me❤️❤️❤️
`,
year:'2023'},
{quote:`Prayer does not cancel ignorance!!`,
year:`2023`},
{quote:`Now listen you who say, “Today or tomorrow we will  go to this or that city, spend a year there, carry on business and make money. “Why, you do not even know what will happen tomorrow. What is your life? You are a mist that appears for a little while then vanishes. Instead, you ought to say, “If it is the Lord’s will, we will live to do this or that.” As it is, you boast and brag. All such boasting is evil. Anyone, then, who knows the good and doesn’t do it sins. 
#James 4:13-17
#tomorrowisinGodshands
#acknowledgeGodineverything`,
year:`2016`},
{quote:`when praying make sure you are specific don ask God to give u a job specify what kind of a job.....if its a husband specify the qualities n x-tics u want in him.....if its a car tel him the type that u want he myt giv u a lorry yet u wntd a range....at tyms we cmplain yet we dnt specify.....learn to be specific in prayers...`,
year:`2013`},
{quote:`that moment wen u realise u r vry important cz if God gave his ONLY son for u. no one should make u feel insignificant...now leave that low self esteem  walk n  with ur shoulders high n with muchi confidence for u r a child of the most high.`,
year:`2013`},
{quote:`Then you will know that i am the Lord THOSE WHO WAIT FOR ME SHALL NOT BE PUT TO SHAME`,
year:`2013`},
{quote:`Unforgiveness lurks within your heart Some folks that yu'll never let go Little foxes and secret folks Will spring surprises on that final day Wow So much for this wonder brother What about you,what about me Let him that thinks that he stands Let him take heed lest he falls Only the pure in heart will see Jesus Those whose garments filled with purity
#listeningtomusic
#Nathanielbasseybookoflife`,
year:`2017`},
{quote:`Now listen you who say, “Today or tomorrow we will  go to this or that city, spend a year there, carry on business and make money. “Why, you do not even know what will happen tomorrow. What is your life? You are a mist that appears for a little while then vanishes. Instead, you ought to say, “If it is the Lord’s will, we will live to do this or that.” As it is, you boast and brag. All such boasting is evil. Anyone, then, who knows the good and doesn’t do it sins. 
#James 4:13-17
#tomorrowisinGodshands
#acknowledgeGodineverything
`,
year:`2016`},
{quote:`tough times don't last bt tough people do
`,
year:`2013`},
{quote:`Just because people are not as exuberant in their worship as you doesn't mean they love God less.....
its their style of worship`,
year:`2019`},
{quote:`Dear God i thnk u because u shine even in our darkest parts may thy holy name be magnified`,
year:`2012`},
{quote:`When you are going through something realy hard just remember that the teacher is always quiet during the test
#Godisnotdead
`,
year:`2016`},
{quote:`dn search for a heavy wallet it will be light sm day. dn search for a 6 pack itakua kitambi sm day. dn search for that height he will bend smday what abt a loving heart and a grwt personality? it will last forever!!!!`,
year:`2013`},
{quote:`jesus friend of sinners......`,
year:`2012`},
{quote:`it is easy 2 take a woman 4 granted if she takes herself 4 granted.its easy bcauz thats the disposition she is used to
`,
year:`2012`},
{quote:`believers b careful abt today 1st april 'fools day' it will put u in to sin FOR GOD HATES A LYING TONGUE make sure u dnt crucify Jesus once more by celebrating lies`,
year:`2013`},
{quote:`NOT EVERY CLOSED DOOR IS LOCKED
PUSH!!!!!`,
year:`2018`},
{quote:`There is beauty in truth, even if it's painful. Those who lie, twist life so that it looks tasty to the lazy, brilliant to the ignorant, and powerful to theweak. But lies only strengthen our defects. They don't teach anything, help anything, fix anything or cureanything. Nor do they develop one's character, one's mind, one's heart or one's soul.
#JoseNHarris`,
year:`2017`},
{quote:`Ni hinya wa mahoya!!!!!`,
year:`2017`},
{quote:`tomorrow belongs to the
people who prepare for it today
`,
year:`2014`},
{quote:`results results who brought about results.....in evrything we do thea r always results...i wish it dnt exist.
`,
year:`2014`},
{quote:`am slowly 'falling in love' with ELLY...now 'enjoying' this revision
`,
year:`2103`},
{quote:`that cat was realy an unbelivable meeting.....i realy dn knw wat grade to pray for bt atlst  God is aware wat i want #hopesaresofrail
`,
year:`2013`},
{quote:`its the highest tym yu declare to the devil that u r allergic to failure!!! God Himself is not a failure so are u...
`,
year:`2013`},
];

const photoFiles = ['eva.jpg','eva1.jpg','eva2.jpg','eva3.jpg','eva4.jpg','eva5.jpg','eva6.jpg','eva7.jpg','eva8.jpg','eva9.jpg','eva10.jpg','eva11.jpg','eva12.jpg']
function getRandomQuote() {
    let randNum = Math.floor(Math.random() * quotes.length);
    let randomQoute = quotes[randNum];
    return randomQoute;
}

function getRandomLocalPhoto() {
    if (photoFiles.length === 0) {
        console.error('No photos found in the specified folder.');
        return null;
    }

    const randomIndex = Math.floor(Math.random() * photoFiles.length);
    const randomPhotoFileName = photoFiles[randomIndex];
    const randomPhotoPath = `images/${randomPhotoFileName}`; // Adjust the path based on your file structure
    return randomPhotoPath;
}
// function getRandomBackgroundImage() {
//     const randomIndex = Math.floor(Math.random() * photoFiles.length);
//     const randomImageUrl = photoFiles[randomIndex];
//     return `url(images/${randomImageUrl})`;
// }

  function printQuote() {
    let quotes = getRandomQuote();
    let quoteContainer = document.getElementById('quote-box');
    let quoteString = `<p  class="quote">${quotes.quote}</p><p class="year">${quotes.year}</p>`;
    quoteContainer.innerHTML = quoteString;
    // document.body.style.backgroundImage = `url('${getRandomLocalPhoto()}')`;
    // document.body.style.backgroundSize = 'contain';
    // const randomBackgroundImage = getRandomBackgroundImage();
    // document.body.style.backgroundImage = randomBackgroundImage;
    // document.body.style.backgroundSize = 'contain';

}


  window.setInterval(() => {
    printQuote()
  },15000)

  document.getElementById('loadQuote').addEventListener('click',printQuote,false)
