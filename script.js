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
    if(NameInput.value == '' || EmailInput.value == '' || PhoneInput.value == '' || BirthInput.value == ''){
        alert('Enter Your information to continue')
    }else{

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
            // -----------Math function
            let RandomNum = Math.floor(Math.random()  * 8999) + 1000
            let RandomNum2 = Math.floor(Math.random()  * 8999) + 1000
            let RandomNum3 = Math.floor(Math.random()  * 8999) + 1000
            let RandomNum4 = Math.floor(Math.random()  * 8999) + 1000
            let RandomNum5 = Math.floor(Math.random()  * 12) + 1
            let RandomNum6 = Math.floor(Math.random()  * 31) + 1
            console.log(UserInfo)
            // -----------Map function
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
                                <h3>${RandomNum} ${RandomNum2} ${RandomNum3} ${RandomNum4}</h3>
                            </div>
        
                            <div class="val">
                                <span>
                                    <p class="FullNameText">${UserInfo.FullName}</p>
                                </span>
                                <p>Valid Thru <br>${RandomNum5}/${RandomNum6}</p>
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
    }
    


})