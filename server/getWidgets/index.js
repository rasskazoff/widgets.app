const script = document.querySelector('script#widgets')
const id = script.src.split('?').reverse()[0]

const getWidgets = async (id)=>{
    let url = `http://localhost:5000/api/widgets/?id=${id}`
    let response = await fetch(url)
    if (response.ok) {
      let data = await response.text()

      const widget__container = document.createElement('div')
      widget__container.classList.add('widget__container')
      widget__container.innerHTML = data
      document.body.appendChild(widget__container)

    } else {
      alert("Ошибка HTTP: " + response.status)
    }
}
getWidgets(id)