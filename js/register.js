
const registerServiceWorker = () => {
if(!navigator.serviceWorker) return;
navigator.serviceWorker.register('js/service.js')  
.then(() => {
    console.log('Registration worked');
}).catch(() => {
    console.log('Registration failed')
})
}
registerServiceWorker();