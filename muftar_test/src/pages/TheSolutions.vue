<template>
    <section>
        <div class="right_box">
            <div class="header">
                <h1>Solutions</h1>
                <p>
                  Made For You
                </p>
            </div>
         <div class="main-box">
            <div class="portal">
                <div class="portal-heading">
                    <h1>Portals</h1>
                    <p>(Carrier dashboard)</p>
                </div>
                <div class="portal-box">
                    <div class="carrer">
                        <div class="carrer-heading">
                            <h2>Carrier</h2>
                            <div class="buttom-line"></div>
                            <div class="listing">
                                <ul>
                                    <li>Driver board</li>
                                    <li>Driver positioning on Map</li>
                                </ul>
                            </div>
                        </div>
                        <div class="carrer-heading">
                            <h2>broker</h2>
                            <div class="buttom-line"></div>
                            <div class="listing">
                                <ul>
                                    <li>Driver statements</li>
                                    <li>Performance Analytics</li>
                                    <li>Market Analysis</li>
                                </ul>
                            </div>
                        </div>
                        <div class="carrer-heading">
                            <h2>customer</h2>
                            <div class="buttom-line"></div>
                            <div class="listing">
                               <div class="para">
                                In consequat, quam id sodales hendrerit,
                                eros mi molestie leo, nec lacinia risus neque 
                                tristique augue
                               </div>
                            </div>
                        </div>
                        <div class="carrer-heading">
                            <h2>MuftarGPT</h2>
                            <div class="buttom-line"></div>
                            <div class="listing">
                               <div class="para">
                                In consequat, quam id sodales hendrerit,
                                eros mi molestie leo, nec lacinia risus neque 
                                tristique augue
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile">
                <div class="mobile-heading">
                    <h1>Mobile</h1>
                </div>
                <div class="mobile-box">
                    <div class="carrer">
                        <div class="mobile-heading">
                            <h2>driver</h2>
                            <div class="buttom-line"></div>
                            <div class="listing">
                                <div class="para">
                                 In consequat, quam id sodales hendrerit,
                                 eros mi molestie leo, nec lacinia risus neque 
                                 tristique augue
                                </div>
                             </div>
                        </div>
                        <div class="mobile-heading">
                            <h2>vendor</h2>
                            <div class="buttom-line"></div>
                            <div class="listing">
                                <div class="para">
                                 In consequat, quam id sodales hendrerit,
                                 eros mi molestie leo, nec lacinia risus neque 
                                 tristique augue
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
        <div class="left_box">
            <img src="@/assets/images/solutions.svg" alt="">
        </div>
        <div class="flague">
            <div class="text">
                <h4>Powered By <br>
                    Muftar rapid
                </h4>
            </div>
            <div class="core">
                <img src="@/assets/images/core.svg" alt="">
            </div>   
        </div>
      </section>
</template>

<style scoped>
section {
    display: flex;
    margin-top: 10rem;
  }
  .right_box {
    width: 100%;
    margin: 5rem 10rem;
  }
  .right_box h1 {
    font-size: 40px;
    font-weight: 700;
    color: #242021;
  }
  .right_box p{
    color: #242021;
    font-size: 22px;
    font-weight: 600;
  }
  .main-box{
    width: 60rem;
    border: 2px solid #3C58A8;
    border-radius: 15px;
    display: flex;
    padding: 1.5rem 1.5rem;
  }
  .portal{
    width: 50%;
  }
  .portal h1{
    color: #3C58A8;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 30px;
  }
  .portal p{
    color: #3C58A8;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
  }
  .portal-heading{
    display: flex;
    align-items: center;
  }
  .mobile{
    width: 50%;
  }
  .mobile h1{
    color: #3C58A8;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 30px;
    margin-left: 0.5rem;
  }
  .portal-box{
    width: 28rem;
    margin-top: 1rem;
    background: #F6F6F6;
    height: 30rem;
    padding: 1rem 1rem;
    border-radius: 15px;
  }
  .carrer-heading h2{
    text-transform: uppercase;
    font-size: 22px;
  }
  .carrer-heading .buttom-line{
    width: 2rem;
    height: 0.5rem;
    background: #3C58A8;
    border-radius: 15px;
  }
  .carrer-heading .listing{
    margin-left: 11rem;
  }
  .main-box li{
    font-weight: 400;
    padding: 0.2rem 0;
  }
  .main-box .para{
    font-weight: 400;
  }
  .mobile-box{
    width: 28rem;
    margin-top: 1rem;
    background: #F6F6F6;
    height: 30rem;
    padding: 1rem 1rem;
    border-radius: 15px;
    margin-left: 0.5rem;
  }
  .mobile-heading .buttom-line{
    width: 2rem;
    height: 0.5rem;
    background: #3C58A8;
    border-radius: 15px;
  }
  .mobile-heading .listing{
    margin-left: 8rem;
  }
  .mobile-heading h2{
    text-transform: uppercase;
    font-size: 22px;
  }
  .left_box {
    margin: -12rem 66rem;
    position: absolute;
  }
  .flague{
    width: 18rem;
    height: 6rem;
    background-image: linear-gradient(to right, #3C58A8, #1E2C54);
    margin-left: 61rem;
    margin-top: 2rem;
    display: flex;
    position: absolute;
    z-index: -999;
    border-radius: 15px;
    padding: 1.8rem 2rem;
  }
  .flague .text{
    text-align: center;
    color: white;
    margin-right: 8rem;
  }
  .flague .core{
    position: absolute;
    margin: -1rem 6rem;
  }
 .core img{
    width: 4rem;
  }
  @media (max-width: 1600px) {
    section{
        height: 0vh;
    }
    .main-box {
        width: 56rem;
    }
    .right_box {
        margin: 1rem 2rem;
    }
    .portal-box{
        width: 26rem;
    }
    .mobile-box {
        width: 26rem;
    }
    .left_box {
        margin: -12rem 55rem;
    }
    .left_box img{
        width: 55rem;
    }
    .flague {
        height: 5rem;
        margin-left: 52rem;
        margin-top: 0rem;
        padding: 1.2rem 1rem;
    }
  }
  @media (max-width: 1366px) {
    .right_box {
        margin: 0rem 2rem;
    }
    .main-box {
        width: 46rem;
    }
    .portal-box{
        width: 21rem;
    }
    .mobile-box{
        width: 21rem;
    }
    .portal h1, .mobile h1 {
        font-size: 22px;
    }
    .portal p, .mobile p {
        font-size: 13px;
    }
    .carrer-heading h2, .mobile-heading h2{
        font-size: 16px;
    }
    .carrer-heading .listing, .mobile-heading .listing {
        margin-left: 8rem;
    }
    .left_box {
        margin: -11rem 44rem;
    }
    .left_box img {
        width: 50rem;
    }
    .flague {
        height: 4rem;
        margin-left: 41rem;
        padding: 0.7rem 1rem;
    }
  }
  @media (max-width: 1280px) {
   section{
    height: 8rem;
    flex-direction: column;
   }
  }
  @media (max-width: 1146px) {
    .main-box {
        width: 67rem;
    }
    .portal-box {
        width: 32rem;
    }
    .carrer-heading .listing, 
    .mobile-heading .listing {
        margin-left: 12rem;
    }
    .mobile-box {
        width: 32rem;
    }
    .left_box {
        margin: 30rem 5rem;
    }
    .left_box img {
        width: 75rem;
    }
    .flague {
        margin-left: 2rem;
        margin-top: 47rem;
    }
  }
  
  @media (max-width: 990px)  {
    section {
        height: 30rem;
    }
    .main-box {
        width: 58rem;
    }
    .portal-box {
        width: 27rem;
    }
    .mobile-box {
        width: 27rem;
    }
    .left_box img {
        width: 65rem;
    }
  }
  @media (max-width: 770px)  {
    section {
        height: 16rem;
    }
    .main-box {
        width: 45rem;
    }
    .portal-box {
        width: 20rem;
    }
    .mobile-box {
        width: 20rem;
    }
    .carrer-heading .listing, 
    .mobile-heading .listing {
        margin-left: 7rem;
    }
    .left_box {
        margin: 35rem 8rem;
    }
    .left_box img {
        width: 45rem;
    }
  }
  @media (max-width: 550px)  {
    section {
        height: 24rem;
    }
    .right_box{
        margin: 24rem 2rem;
    }
    .main-box {
        width: 31rem;
        flex-direction: column;
    }
    .portal {
        width: 55%;
    }
    .portal-box {
        width: 28rem;
        height: 24rem;
    }
    .mobile-box {
        width: 28rem;
        height: 13rem;
    }
    .mobile {
        margin-top: 2rem;
    }
    .left_box {
        margin: -7rem 4rem;
    }
    .left_box img {
        width: 35rem;
    }
    .flague {
        margin-left: 2rem;
        margin-top: 1rem;
        padding: 2rem 0.5rem;
    }
    .flague .text {
        font-size: 12px;
    }
    .flague .core {
        margin: -1rem 4rem;
    }
  }
  @media (max-width: 470px)  {
    section {
        height: 40rem;
    }
    .right_box {
        margin: 22rem 2rem;
    }
    .main-box {
        width: 26rem;
    }
    .header{
        text-align: center;
        margin-left: -3rem;
    }
    .portal{
        width: 66%;
    }
    .portal-box {
        width: 23rem;
        height: 27rem;
    }
    .mobile-box {
        width: 23rem;
        height: 15rem;
    }
    .left_box {
        margin: -5rem 5rem;
    }
    .left_box img {
        width: 30rem;
    }
    .flague {
        margin-top: 2rem;
        height: 4rem;
        padding: 1rem 0.5rem;
    }
  }
  @media (max-width: 414px)  {
    section {
        height: 47rem;
    }
    .right_box{
        margin: 18rem 2rem;
    }
    .main-box{
        width: 22rem;
    }
    .portal{
        width: 80%;
    }
    .portal-box {
        width: 19rem;
        height: 31rem;
    }
    .mobile-box {
        width: 19rem;
        height: 18rem;
    }
    .left_box {
        margin: -5rem 5rem;
    }
    .left_box img {
        width: 26rem;
    }
    .flague {
        margin-top: 1rem;
    }
  }
  @media (max-width:390px) {
    .right_box{
        margin-left: 1rem;
    }
    .left_box {
        margin: -5rem 4rem;
    }
    .flague{
        margin-left: 1rem;
    }
  }
  @media (max-width:375px){
    .right_box{
        margin-left: 0.7rem;
    }
    .flague{
        margin-left: 0.7rem;
    }
  }
  
</style>