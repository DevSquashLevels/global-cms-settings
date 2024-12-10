function getCookieValue(name) {
const regex = new RegExp(`(^| )${name}=([^;]+)`);
const match = document.cookie.match(regex);
if (match) {
return decodeURIComponent(match[2]);
}
}

document.addEventListener('DOMContentLoaded', () => {
if (window.location.pathname === '/' ) {
//get SquashlevelsJwt from cookie
const jwt = getCookieValue('SquashlevelsJWT');
if (jwt) {
const domain = window.location.hostname;

//decode jwt
const jwtPayload = JSON.parse(atob(jwt.split('.')[1]));

//check if jwt domain matches current domain

if (jwtPayload.iss === domain) {
window.location.href = "https://app." + domain; // Redirect to app subdomain
}
}
}
});
