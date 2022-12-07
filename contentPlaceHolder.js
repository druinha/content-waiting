const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://media.gettyimages.com/id/560122079/photo/farmer-woman-driving-an-old-tractor-through-a-field.jpg?s=1024x1024&w=gi&k=20&c=wnIchI2zoFeYTahICGKLE3hHbAMomcSHWl94VELuYcs=" alt="">';
    title.innerHTML = ' Farmer';
    excerpt.innerHTML = 'A farmer works under the umbrella of agriculture, producing a variety of food products for human and animal consumption';
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">';
    name.innerHTML = 'Johana Dere';
    date.innerHTML = 'Dec 07 2022';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}