text = ['How it feels to chew 5 gum', 
'When your mom makes meatloaf but you wanted lasagna', 
'The day the world ended', 
'When you see a baby using the frozen foods section as a urinal', 
'After you get a colonoscopy',
'Grabbing food at 2 am',
'When you eat the last donut',
'Your mom watching you eat a bucket of mac & cheese',
'Abe Lincoln watching you from his grave',
'Catching your son awake at 4 am']
imgs = ['https://i.kym-cdn.com/photos/images/newsfeed/000/987/379/6e6.jpg',
'https://i.kym-cdn.com/photos/images/newsfeed/001/185/847/c64.png',
'https://i.kym-cdn.com/photos/images/newsfeed/001/657/280/12e.jpg',
'https://i.kym-cdn.com/photos/images/newsfeed/001/512/849/b90.jpg',
'https://i.kym-cdn.com/photos/images/newsfeed/001/347/364/dcd.jpg',
'https://i.kym-cdn.com/photos/images/newsfeed/000/651/486/d02.jpg',
'https://i.kym-cdn.com/photos/images/newsfeed/000/666/627/6c6.jpg',
'https://www.wikihow.com/images/thumb/b/b5/Stay-Sane-Working-from-Home-Step-3.jpg/aid12149084-v4-728px-Stay-Sane-Working-from-Home-Step-3.jpg.webp',
'https://www.wikihow.com/images/thumb/c/ca/Run-Long-Distances-Step-2-Version-3.jpg/aid548378-v4-728px-Run-Long-Distances-Step-2-Version-3.jpg.webp',
'https://www.wikihow.com/images/thumb/f/f8/Run-Long-Distances-Step-12-Version-2.jpg/aid548378-v4-728px-Run-Long-Distances-Step-12-Version-2.jpg.webp',
'https://www.wikihow.com/images/thumb/7/74/Run-Long-Distances-Step-1-Version-3.jpg/aid548378-v4-728px-Run-Long-Distances-Step-1-Version-3.jpg.webp']
const parent = document.querySelector('.container')



const input = document.querySelector('#text')
const inputs = document.querySelector('#image')
document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();
    
    document.querySelector('#img').setAttribute('src', inputs.value)
    document.querySelector('#memeWords').innerHTML = input.value
    

    text.push(input.value);
    imgs.push(inputs.value);

    input.value = ''; 
    inputs.value = '';

})




document.querySelector('#random').addEventListener('click', function(){
    document.querySelector('#img').setAttribute('src', imgs[Math.floor(Math.random() * imgs.length)])
    document.querySelector('#memeWords').innerHTML = text[Math.floor(Math.random() * text.length)]
})

