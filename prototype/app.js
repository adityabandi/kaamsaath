const nav=[...document.querySelectorAll('aside nav button')];
nav.forEach(b=>b.onclick=()=>{nav.forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.content').forEach(x=>x.classList.add('hidden'));document.getElementById(b.dataset.view).classList.remove('hidden')});
const modal=document.getElementById('modal');
document.querySelector('.featured .accept').onclick=()=>modal.classList.remove('hidden');
document.querySelectorAll('.close').forEach(x=>x.onclick=()=>modal.classList.add('hidden'));
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
document.getElementById('lang').onclick=e=>{e.target.textContent=e.target.textContent.includes('हिंदी')?'English / हिंदी':'हिंदी / EN'};
