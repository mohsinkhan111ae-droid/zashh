
const upiId = "6005099281@mbk";
const telegramLink = "https://t.me/+your_vip_group_link";

function $(s){return document.querySelector(s);}
function showToast(msg){const el=$('#liveNotify');el.innerText=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3000);}
function showModal(msg){$('#modalBody').innerHTML=msg;$('#modal').setAttribute('aria-hidden','false');}
function closeModal(){$('#modal').setAttribute('aria-hidden','true');}

document.addEventListener('DOMContentLoaded',()=>{
  // Copy UPI
  $('#copyUpi').onclick=()=>{navigator.clipboard.writeText(upiId);showToast('UPI copied');};
  // Start Join
  $('#startJoin').onclick=()=>{showModal('<h3>Pay ₹150 first</h3><p>UPI: '+upiId+'</p>');};
  // Modal buttons
  $('#modalClose').onclick=closeModal; $('#modalOk').onclick=closeModal;
  // UTR submit
  $('#utrForm').onsubmit=(e)=>{e.preventDefault();const utr=$('#utr').value.trim();if(!utr)return;localStorage.setItem('utr',utr);$('#utrMsg').innerText='✅ UTR '+utr+' submitted';showToast('UTR submitted');};
  // Join Channel
  $('#joinChannel').onclick=()=>{
    let utr=localStorage.getItem('utr');
    if(!utr){
      showModal('<h3>❌ Payment Required</h3><p>आपकी payment अभी verify नहीं हुई है। पहले ₹150 pay करें और UTR submit करें।</p>');
    } else {
      showModal('<h3>✅ UTR Received</h3><p>हमने आपका UTR '+utr+' receive कर लिया है। Verification के बाद join कर पाएंगे।</p>');
    }
  };
  // Fake join notifications 30-40 members style
  const names=['Rahul','Sneha','Arjun','Pooja','Kiran'];setInterval(()=>{const n=names[Math.floor(Math.random()*names.length)];const c=Math.floor(Math.random()*11)+30;showToast(n+' joined! ('+c+' members)');},6000);
});
