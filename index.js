console.log('all oky')

const APIData = async ()=>{
const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
const Data = await res.json();
const AllData = Data.posts
console.log(AllData)
showData(AllData)
}
APIData()
const postContainer =document.getElementById('post-container') // post container

const showData = (AllPost)=>{
    AllPost.forEach(data => {
        console.log(data) // data
        const div = document.createElement('div')
      div.innerHTML =`
        
    <div class="flex flex-col gap-6 bg-[#797dfc1a] rounded-2xl p-4 lg:flex-row items-center">

      <div class="w-20 h-20 bg-gray-800 rounded-xl">
     <img src="${data.image}">
      </div>
      <div class="flex flex-col gap-7">
        <h1 class="inline-flex gap-9">#${data.category} <span>Author : <span>${data.name} </span>ID: ${data.id}</span></h1>
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
  <img src="images/icon/email 1.png" alt="">
  </div>
        </div>
      </div>

    </div>
      
      
      `
      postContainer.appendChild(div);
    });
}
const searchHandler = ()=>{
    
}