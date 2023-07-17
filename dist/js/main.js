const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

const sender = () => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}

export default sender;