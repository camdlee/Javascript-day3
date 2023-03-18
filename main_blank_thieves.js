// connect/test js file to html
console.log('testing')

// .getElementsByTagName()
const h1s = document.getElementsByTagName('h1')
console.log(h1s[0])

// .getElementsByClassName()
const students = document.getElementsByClassName('student')
console.log(students)

// .getElementById()
const instructor = document.getElementById('dylan')
console.log(instructor)

// .querySelector() (ES6 Modern Approach)
const h1sQuery = document.querySelector('h1')
console.log(h1sQuery)

// .querySelectorAll()
const h1sQuery1 = document.querySelectorAll('h1')
console.log(h1sQuery1[0])

// .innerText property: Changes the text
instructor.innerText = 'Christian'
// .innerHTML property: Allows you to write HTML code
const changeMe = document.getElementsByClassName('change-me')[0]
changeMe.innerHTML = `<a href='https://www.codingtemple.com/'>Link to coding temple</a>`

// .createElement()
const newBtn = document.createElement('button')
newBtn.innerText = 'Created in JS'
document.body.append(newBtn)

// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()
const bodyEl = document.querySelector('body')

newBtn.addEventListener('click', () => {
    console.log('im being clicked')

    if(bodyEl.className === ''){
        bodyEl.className= 'green'
    } else if (bodyEl.className === 'green') {
        bodyEl.className = 'gold'
    } else {
        bodyEl.className = 'green'
    }
})

// anytime you want to change something on your site after a certain action, you'd want to do it through javascript

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)

// Option 2: using onclick attribute in HTML
// onclick="function(event)"
function changeColor(){
    if(bodyEl.className === ''){
        bodyEl.className= 'green'
    } else if (bodyEl.className === 'green') {
        bodyEl.className = 'gold'
    } else {
        bodyEl.className = 'green'
    }
}

// Lets create a new button and append to a specfic div
const newBtn2 = document.createElement('button')
newBtn2.innerText = 'SJs Button'
//first way of doing it 
//document.getElementsByClassName('sj')[0].append(newBtn2)

// can also do it this way
const sjDiv = document.getElementsByClassName('sj')[0]
sjDiv.append(newBtn2)

// adding addEventListener() to new button to add text every time its clicked
newBtn2.addEventListener('click', () => {
    //creating an element
    for(let i = 0; i<4; i++){
        const newText = document.createElement('p')
        newText.innerText = 'Adding text to this button'
        sjDiv.append(newText)   
    }
})

const newBtn3 = document.createElement('button')
newBtn3.innerText = 'My Button'
sjDiv.append(newBtn3)

newBtn3.addEventListener('click', () => {
    const createBtn = document.createElement('button')
    createBtn.innerText = 'adding another button'
    bodyEl.append(createBtn)
})

// grabbing form data with .addEventListener()
const formData = document.querySelector('#form-data')
console.log(formData)
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target[0].value)
    
    //grab data using name attributes + formData variable
    const name = formData.name.value
    const email = formData.email.value

    console.log(name, email)
})

