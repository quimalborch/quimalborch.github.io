function LoadedWeb() {
    setTimeout(() => {  document.getElementById("loader").style.backgroundColor = "rgba(31, 31, 31, 0)"; }, 1000);
    
    setTimeout(() => { GetLinkedin() }, 2000);
}

function GetLinkedin() {
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}