// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      console.log(user);

      // TODO: 이름, 이메일, 주소 표시하기
      username.innerHTML = user.name;
      email.innerHTML = user.email;
      address.innerHTML = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
