
<template>
  <section>
    <div class="right_box">
      <h1>Powerful & Paperless, Yet Simple</h1>
      <p>
        Speed up your business processes and make sure <br />
        your business operations are running smoothly.
      </p>
      <div class="all_checkboxes">
        <img src="../assets/images/process.svg" alt="">
    </div>
    <h3>Stay informed when new updates are released.</h3>
    <div class="short_form">
        <input type="email" placeholder="Enter Your Email">
        <button>Join</button>
    </div>
    </div>
    <div class="left_box">
        <img src="../assets/images/Divices.svg" alt="">
    </div>
  </section>
</template>

<style scoped>
html,
body{
  overflow: hidden;
}
section {
  display: flex;
  margin-top: 10rem;
}
.right_box {
  margin: 5rem 10rem;
}
.right_box h1 {
  font-size: 40px;
  font-weight: 700;
  color: #242021;
}
.right_box p{
  color: #666668;
  margin-top: 2.5rem;
  font-size: 22px;
  font-weight: 500;
}
.left_box {
  margin: -7.5rem -18rem;
}
.all_checkboxes {
  display: flex;
  align-items: center;
  margin: 9rem 0rem;
}
.right_box h3{
    color: #666668;
    margin-top: 8rem;
    font-weight: 400;
}
.short_form {
  width: 60rem;
  display: flex;
    margin-top: 2rem;
}
.short_form input[type='email']{
    padding: 1rem 2rem;
    font-size: 18px;
    border-radius: 10px;
    width: 25rem;
    font-weight: 400;
}
button {
    margin-left: 2rem;
    padding: 1rem 2rem;
    background-color: #3c58a8;
    border: none;
    outline: none;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
}
@media (max-width: 1600px) {
  section{
    display: flex;
    flex-direction: column;
  }
  .right_box {
    margin: 5rem 4rem;
}
.left_box{
  margin: -51.5rem 40rem;
}
  .left_box img{
    width: 80rem;
}
}
@media (max-width: 1366px) {
  section{
    display: flex;
    flex-direction: column;
  }
  .right_box {
    margin: 5rem 4rem;
}
.all_checkboxes img{
  width: 40rem;
}
.left_box {
  margin: -51.5rem 35rem;
}
  .left_box img{
    width: 80rem;
}
}
@media (max-width: 1280px) {
  section{
    display: flex;
    flex-direction: column;
  }
  .right_box {
    margin: 5rem 4rem;
}
.all_checkboxes img{
  width: 40rem;
}
.left_box {
  margin: -43.5rem 39rem;
}
  .left_box img{
    width: 68rem;
}
}
@media (max-width: 1146px) {
  section{
    display: flex;
    flex-direction: column;
  }
  .right_box {
    margin: 0rem 4rem;
}
.all_checkboxes img{
  width: 40rem;
}
.left_box {
  margin: -6.5rem 16rem;
}
  .left_box img{
    width: 80rem;
}
}

@media (max-width: 990px)  {
  
  section{
    display: flex;
    flex-direction: column;
  }
  .right_box {
    margin: 1rem 8rem;
}
.right_box h1 {
  font-size: 30px;
}
.right_box p {
  font-size: 18px;
}
.all_checkboxes {
  margin: 4rem 0rem;
}
.all_checkboxes img {
  width: 600px;
}
.right_box h3 {
  margin-top: 33rem;
}
button {
  margin-left: 1rem;
}
.left_box img{
  width: 62rem;
}
.left_box {
  margin: -47.5rem -3rem;
}
}
@media (max-width: 770px)  {

button {
  margin-left: 1rem;
  padding: 1rem 1.5rem;
}
.right_box {
  margin: 1rem 3rem;
}
.left_box img {
  width: 52rem;
}
.left_box {
  margin: -43.5rem -4rem;
}
.left_box img {
  width: 32rem;
  margin-top: 5rem;
}
}
@media (max-width: 550px)  {
  .all_checkboxes img {
    width: 460px;
}
.left_box img {
  width: 42rem;
}
.right_box {
  margin: 1rem 3rem;
}
.right_box h3 {
  margin-top: 25rem;
}
.left_box {
  margin: -39.5rem -4rem;
}
button {
  margin-left: 0rem;
  padding: 1rem 1.5rem;
  width: 192px;
  margin-top: 1rem;
}
.short_form {
  /* width: 60rem; */
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
}
}
@media (max-width: 470px)  {
  .right_box h1 {
    font-size: 25px;
}
.right_box p {
  font-size: 16px;
}
  .all_checkboxes img {
    width: 400px;
}
.left_box img {
  width: 38rem;
}
.right_box {
  margin: 1rem 3rem;
}
.right_box h3 {
  margin-top: 25rem;
  font-size: 17px;
}
.left_box {
  margin: -39.5rem -4rem;
}
button {
  margin-left: 0rem;
  padding: 1rem 1.5rem;
  width: 192px;
  margin-top: 1rem;
}

.short_form {
  /* width: 60rem; */
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
}
.left_box img {
  width: 32rem;
  margin-top: 5rem;
}
}
@media (max-width: 450px)  {
  .right_box {
    margin: -1rem 1rem;
}
.right_box h1 {
  font-size: 23px;
}
.right_box p {
  font-size: 15px;
}
.all_checkboxes img {
  width: 346px;
}
.right_box h3 {
  margin-top: 22rem;
  font-size: 17px;
}
.left_box img {
  width: 32rem;
}
.left_box {
  margin: -32.5rem -4rem;
}
.short_form{
  display: flex;
  flex-direction: row;
}
.short_form input[type='email'] {
  width: 16rem;
  margin-top: -0.5rem;
}
  button{
    margin-top: -0.5rem;
    margin-left: 0.5rem;
    width: 6rem;
    height: 3.5rem;
}
.left_box img {
  width: 32rem;
  margin-top: 5rem;
}
}
@media (max-width:390px) {
.short_form{
  display: flex;
  flex-direction: row;
}
.short_form input[type='email'] {
  width: 16rem;
  margin-top: -0.5rem;
}
  button{
    margin-top: -0.5rem;
    margin-left: 0.5rem;
    width: 6rem;
    height: 3.5rem;
}
.left_box img {
  width: 32rem;
  margin-top: 5rem;
}
}
@media (max-width:375px){
  .short_form input[type='email'] {
    width: 15rem;
}
}
</style>
