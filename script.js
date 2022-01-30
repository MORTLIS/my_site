elem = document.getElementById('tap')

elem.onclick = () =>{
    elem.style.color = 'red'
    elem.style.margin = '200px'
    elem.innerHTML = 'Ваня додик'
    setTimeout(()=>{
        elem.innerHTML = 'Даня тоже'
    }, 1000)
}