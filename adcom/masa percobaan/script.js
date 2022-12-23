// alert ('ok sudah berhasil terhubung')

//  1. set password
const password = 'password anda'

// 2.ambil element pada html
const getusername = document.queryselector('#username')
const getpassword = document.queryselector('#password')
const getform =document.querySelector('#form')

// 3.lakukan event on click ketika user klik login button
getform.addEventListener('submit',(e)=>{
//agar saat user klik login halalaman website tidak ter-refresh
    e.preventdefault()
// ambil data username user
alert(getusername.value)
// ambil data password user
alert(getpassword.value)

})


// 4.lakukan percabangan


// 5. cek value apakah dua nilai yang diinputkan user sama dengan nilai constatnta password