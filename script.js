fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(res => reload(res))

let container = document.querySelector('.container')


function reload(arr) {
    for(let i of arr) {
        let item = document.createElement('div')
        
        item.classList.add('item')
        item.style.backgroundImage = `url(${i.url})`

        container.append(item)

        let modal = document.querySelector('.popup-black')
        let modalId = document.querySelector('.idItem')
        let modalTitle = document.querySelector('.title')
        
        item.onclick = () => {
            modal.style.display = 'block'
            modalId.innerHTML = 'ID: ' + i.id
            modalTitle.innerHTML = 'Title: ' + i.title

            setTimeout(() => {
                modal.style.opacity = '1'
            }, 200)
        }
        modal.onclick = () => {
            modal.style.opacity = '0'
                setTimeout(() => {
                    modal.style.display = 'none'
                }, 400)
        }
        
    }

}