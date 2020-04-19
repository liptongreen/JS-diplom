let arrUsers = []; 
var i = 0;


class User{
    constructor(name,email,number,password){
        this._name = name;
        this._email = email;
        this._number = number;
        this._password = password;
    }
    get name(){
        this._name = namer;
        return this._name;
    }
    get email(){
        return this._email;
    }
    get number(){
        return this._number;
    }
    get password(){
        return this._password;
    }
    set name(value){
        if(value.length == ''){
            alert('Введите имя');
        } else {
            this._name = value
        }
    }
    set number(value){
        if(value.length == ''){
            alert('Введите ваш номер телефона');
        } else {
            this._number = value
        }
    }
    set password(value){
        if(value.length == ''){
            alert('Введите пароль');
        } else {
            this._password = value
        }
    }
    set email(value){
            if(value.length == ''){
                alert('Введите email');
            } else {
                this._email = value
    }
    } 
}

console.log(name);
editUser(i);
function editUser(i){
    document.getElementById('registry').addEventListener('click', function(){
        let name = document.getElementById('namer').value;
        let email = document.getElementById('emailr').value;
        let password = document.getElementById('passwordr').value;
        let number = document.getElementById('numberr').value;
    arrUsers[i] = new User(name,email,number,password);

    arrUsers[i].name = name;
    arrUsers[i].password = password;
    arrUsers[i].number = number;
    arrUsers[i].email = email;
    i++;    
    document.getElementById('registr').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    });

}


document.getElementById('regestr').addEventListener('click',()=>{
    document.getElementById('login').style.display = 'none';
    document.getElementById('registr').style.display = 'block';
})

var a = 0;
var status = false;
document.getElementById('enter').addEventListener('click',function() {
    for(a; a < arrUsers.length; a++){
        console.log(a);
        if((document.getElementById('email').value === arrUsers[a].email || 
        document.getElementById('email').value === arrUsers[a].name) &&
        document.getElementById('password').value === arrUsers[a].password){
        status = true; 
        localStorage.setItem('status','true');
        document.getElementById('login').style.display = 'none';
        document.getElementById('namepage').style.display = 'block';
        document.getElementById('nameOut').innerHTML = arrUsers[a].name;
        document.getElementById('numberOut').innerHTML = arrUsers[a].number;
        document.getElementById('emailOut').innerHTML = arrUsers[a].email;
        } else{
        alert('неверный логин или пароль');
    }
}
}
)


function control(){
if(localStorage.getItem('status') == 'true'){
    --a;
    document.getElementById('nameOut').innerHTML = arrUsers[a].name;
    document.getElementById('numberOut').innerHTML = arrUsers[a].number;
    document.getElementById('emailOut').innerHTML = arrUsers[a].email;
    document.getElementById('user').style.display = 'none';
    document.getElementById('userlogin').style.display = 'flex';
    document.getElementById('namepage').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}
}

control();