// console.log('all oky')




let count = 0;
const APIData = async (search='coding')=>{
const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`)
const Data = await res.json();
const res2 = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
const data2 = await res2.json();
console.log(data2)
const AllData = Data.posts
// console.log(AllData)
showData(AllData)
showLetastPost(data2)
}
const postContainer =document.getElementById('post-container') // post container

const showData = (AllPost)=>{
    postContainer.textContent=' ';
    AllPost.forEach(data => {
        // console.log(data) // data
        const div = document.createElement('div')
      div.innerHTML =`
        
    <div class="flex flex-col gap-6 bg-[#797dfc1a] rounded-2xl p-4 lg:flex-row items-center">

      <div class="w-20 h-20 bg-gray-800 rounded-xl">
     <img src="${data.image}">
      </div>
      <div class="flex flex-col gap-7">
        <h1 class="inline-flex gap-9">#${data.category} <span>Author : <span>${data.author.name} </span>ID: ${data.id}</span></h1>
        <h1 class="text-[#12132D] font-semibold text-2xl">${data.title}</h1>
        <p class="text-xl">${data.description}</p>
        <div class="border-[3px] border-dashed border-gray-400"></div>
        <!-- <hr class="border-t border-[3px] border-dashed border-gray-400"> -->
        <div class="flex justify-between">
  <div>
  <h1 class="inline-flex gap-3"><img src="images/icon/tabler-icon-message-2.png" alt=""> <span>${data.comment_count}</span></h1>
  <h1 class="inline-flex gap-3"><img src="images/icon/tabler-icon-eye.png" alt=""> <span>${data.view_count}</span></h1>
  <h1 class="inline-flex gap-3"><img src="images/icon/tabler-icon-clock-hour-9.png" alt=""> <span>${data.posted_time}</span></h1>
  </div>
  <div>
  <button onclick="readHandler('${data.view_count}', '${data.title}')">
  <img src="images/icon/email 1.png" alt=""> </button>
  </div>
        </div>
      </div>

    </div>
      
      
      `
      postContainer.appendChild(div);
    });

}
const searchHandler = ()=>{
    const inputText = document.getElementById('input-Text').value;
    const inputValue = inputText.split(' ').join('');
    console.log(inputValue);
    APIData(inputValue);
}
const readHandler = (dataTitle,dataView)=>{
  const markBox = document.getElementById('mark-box');
  const markRead = document.createElement('div');
  markRead.classList.add("flex","justify-between","p-4","bg-white","rounded-xl","items-center","h-auto")
  markRead.innerHTML = `
      <h1 class="text-[#12132D] font-semibold text-[16px]">${dataTitle}</h1>
      <h1 class="inline-flex"><img class="w-8 h-8" src="images/icon/tabler-icon-eye.png" alt=""> <span>${dataView}}</span></h1>
  `
  markBox.appendChild(markRead)
  count++;
   document.getElementById('count').innerText = count;

    console.log('clicked title')
    console.log(count)
    // console.log(dataTitle,dataView)

}
const showLetastPost = (data2)=>{
  data2.forEach(leatPost => {
    const leaTestPostContainer =  document.getElementById('last-conatainer')
    const leaTestPost =document.createElement('div')
    leaTestPost.classList.add('max-w-[375px]','max-h-[525px]','flex','flex-col','gap-2','border-[2px]','border-black','rounded-lg','p-3')
    leaTestPost.innerHTML = `
           <img class="max-w-80 max-h-48 border-[2px] border-black rounded-xl" src="${leatPost.cover_image}" alt="">
           <h1 class="inline-flex gap-3"><img src="images/icon/Frame(5).png" alt=""><span>${leatPost.author?.posted_date}</span> </h1>
           <h1 class="text-black text-2xl font-semibold">${leatPost.title}</h1>
           <p class="text-xl max-w-96">${leatPost.description}</p>
           <div class="flex items-center gap-6">
             <div>
               <img class="w-10 h-10 rounded-full border-[2px] border-black" src="${leatPost.profile_image}" alt="">
             </div>
             <div class="flex flex-col gap-2">
               <h1 class="text-black text-2xl font-semibold">${leatPost.author?.name}</h1>d
               <h1 class="text-black text-xl">${leatPost.author?.designation}</h1>
             </div>
           </div>
    `
    leaTestPostContainer.appendChild(leaTestPost);  
  });

}
APIData()