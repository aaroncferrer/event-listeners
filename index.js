document.body.innerHTML = 
`
<label for="first-name">First Name:</label>
<input type="text" name="first-name" id="first-name"><br>

<label for="last-name">Last Name:</label>
<input type="text" name="last-name" id="last-name"><br>

<span>Full name:</span>
<span id="full-name"></span>
`

const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const fullName = document.querySelector('#full-name')

function showName() {
    fullName.textContent = `${firstName.value} ${lastName.value}`
}

firstName.addEventListener('keyup', showName)
lastName.addEventListener('keyup', showName)

