// --------------Main doms
let MainDiv = document.querySelector('.main')
let MyData = []
// -----input Doms
let NameInput = document.querySelector('.FullName')
let EmailInput = document.querySelector('.EmailInput')
let PhoneInput = document.querySelector('.PhoneInput')
let GenderInput = document.querySelector('.GenderInput')
let BirthInput = document.querySelector('.BirthInput')
// -----Button Dom
let GenerateButton = document.querySelector('.SubmitButton')

// ----------Construction Function
GenerateButton.addEventListener('click', () => {

    function User(UserFullName, UserEmail, UserPhone, UserGender, UserDate) {

        this.FullName = UserFullName
        this.UserEmail = UserEmail
        this.UserPhone = UserPhone
        this.UserGender = UserGender
        this.UserDate = UserDate
    }

    let singleUser = new User(`${NameInput.value}`, `${EmailInput.value}`, `${PhoneInput.value}`, `${GenderInput.value}`, `${BirthInput.value}`)
    MyData.push(singleUser)

    MainDiv.innerHTML = ''

    MyData.map(UserInfo => {

        console.log(UserInfo)

        MainDiv.innerHTML += `<div class="flip-card">
                <div class="container flip-card-inner">
                    <div class="flip-card-front">
                        <header>
                            <span class="logo">
                                <img src="images/logo.png">
                                <h4>Master Card</h4>
                            </span>
                            <img src="images/chip.png">
                        </header>
                        <div class="cardnum">
                            <p>Card Number</p>
                            <h3>8050 5040 2030 3020</h3>
                        </div>
    
                        <div class="val">
                            <span>
                                <p class="FullNameText">${UserInfo.FullName}</p>
                            </span>
                            <p>Valid Thru <br>05/28</p>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <div class="strip"></div>
                        <div class="infos">
                            <p>Email : <span class="emailInfo">${UserInfo.UserEmail}</span></p>
                            <p>Phone : <span class="phoneInfo">${UserInfo.UserPhone}</span></p>
                            <p>Gender : <span class="genderInfo">${UserInfo.UserGender}</span></p>
                            <p>Birth Date : <span class="dateInfo">${UserInfo.UserDate}</span></p>
                        </div>
                    </div>
    
                </div>
            </div>`
    })


})