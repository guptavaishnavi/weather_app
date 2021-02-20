const form = document.querySelector('.search')
const search = document.querySelector('input')
const icon = document.querySelector('.icon')
const msg1 = document.querySelector('.location')
const msg2 = document.querySelector('.temp')
const msg3 = document.querySelector('.desc')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)
    msg1.innerHTML = 'Loading..'
    msg2.innerHTML = ''
    msg3.innerHTML = ''
    
    fetch('/weather?location='+location).then(
        (response)=>{
            response.json().then((data)=>{
                if(data.error){
                    console.log(data.error)
                    msg1.innerHTML = data.error
                }
                else{
                    icon.innerHTML = '<img src="'+ data.icon + '" alt="weather Icon">'
                    msg1.innerHTML = data.temp + ' ° Celcius'
                    msg2.innerHTML = data.desc
                    msg3.innerHTML = data.location
                }
                
            })
        }
    )

})
