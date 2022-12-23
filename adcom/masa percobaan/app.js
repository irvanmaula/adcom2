// cek apakah sudah terkoneksi
// alert ("oke berhasil terhubung");

// ambil elemen input nuser
const getusername = document.querySelector("#username");
const getpassword = document.querySelector("#password");
const getform = document.querySelector("form");

// buat user dan password
const USERS = [
  {
    name: "irvanmaul4321@gmail.com",
    password: "123",
  },
];

// testing console.log ('user')
console.log(USERS);

// lakukan perulangan untuk ambil data dari databese
// USERS.forEach(user => {
//   console.log (user);
  
// });
// tambahkan event ketika user klik logun form
getform.addEventListener("submit", (event) => {
  // agar ketika user klik login tidak terload browsernya
  event.preventDefault();

  // ambil value dari username
  // alert(getusername.value);

  // lakukan percabangan dan perulangan 
  USERS.forEach((users) => {
    if(getusername.value == users.name && getpassword.value == users.password){
      alert("oke berhasil login")
    }else{
      alert("invalid credentials")
    }
  })
});
