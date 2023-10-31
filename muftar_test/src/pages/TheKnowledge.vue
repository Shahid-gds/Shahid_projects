<template>
    <section>
        <div class="container">
            <div class="main-header">
                <h1>Get An Answer To All Your Questions</h1>
            </div>
            <div class="search-box">
                <button class="button" id="button">
                    <span id="select-label">All Categories</span>
                    <div class="arrow"></div>
                </button>
             <div class="dropdown">
                <label for="">All Categories</label>
                <input class="option" type="radio">
                <label for="">All Categories</label>
                <input class="option" type="radio">
                <label for="">All Categories</label>
                <input class="option" type="radio">
                <label for="">All Categories</label>
                <input class="option" type="radio">
                <label for="">All Categories</label>
                <input class="option" type="radio">
                <label for="">All Categories</label>
                <input class="option" type="radio">
                <label for="">All Categories</label>
                <input class="option" type="radio">
             </div>
             <div class="right-border"></div>
             <div class="search-bar">
                <input type="text" placeholder="Type your question here ...">
             </div>
             <div class="search-icon">
                <img src="../assets/images/search.svg" alt="">
             </div>
            </div>
            <div class="text-box">
                <span>Your Answer Here ...</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, </p>
            </div>
            <div class="portfolio">   
                <div class="boxes" v-for="box in boxes">
                    <div class="icon">
                       <img :src="box.img">
                    </div>
                    <div class="text">
                        <h1>{{box.heading}}</h1>
                        <p>{{box.para}}</p>
                    </div>
                </div>      
            </div>
        </div>
        
      </section>
</template>
<script>

export default {

    data(){
        return{
            boxes:[
                {
                img: '../../src/assets/images/shuttle.svg', 
                heading: 'Getting Strated', 
                para:'Get Acquainted With Your New Workspace.'
                },
                {
                img: '../../src/assets/images/integration.svg',
                heading: 'Integrations', 
                para:'Select Your User Count Using The Slider..'
                },
                {
                img: '../../src/assets/images/community.svg', 
                heading: 'Community', 
                para:'Select Your User Count Using The Slider..'
                },
                {
                img: '../../src/assets/images/writing.svg',
                heading: 'Blogs & Tutorials', 
                para:'Select Your User Count Using The Slider..'
                },
                {
                img: '../../src/assets/images/plan.svg',
                heading: 'Custom Plan', 
                para:'Select Your User Count Using The Slider..'
                },
                {
                img: '../../src/assets/images/shuttle.svg',
                heading: 'Getting Strated', 
                para:'Select Your User Count Using The Slider..'
                },
                {
                img: '../../src/assets/images/shuttle.svg',
                heading: 'Custom Plan', 
                para:'Select Your User Count Using The Slider..'
                },
            ]
        }
    }
}
</script>

<style scoped>
section {
    margin-top: 10rem;
  }
  .main-header{
    margin: 5rem 10rem;
  }
  .main-header h1{
    text-align: center;
    font-size: 50px;
    color: #3C58A8;
    font-weight: 900;
  }
  .text-box{
    width: 85%;
    padding: 8rem 15rem;
    border: 1px solid #C4C4C4;
    background: #FFFFFF;
    border-radius: 15px;
    margin-left: 10rem;
    text-align: center;
  }
  .text-box span{
    font-size: 22px;
    font-weight: 400;
    color: #B7B7B7;
  }
  p{
    font-size: 22px;
    font-weight: 400;
    margin-top: 2rem;
  }
  .search-box{
    display: flex;
    width: 40rem;
    height: 4rem;
    position: absolute;
    border: 1px solid #B7B7B7;
    background: #FFFFFF;
    margin-left: 40rem;
    border-radius: 15px;
    margin-top: -2rem;
  }
  .right-border{
    height: 3.9rem;
    width: 1px;
    background: #B7B7B7;
  }
  .button{
    display: flex;
    justify-content: space-between;
    width: 10rem;
    height: 3rem;
    padding: 1rem 1rem;
    background: #FFFFFF;
    border: none;
    font-size: 16px;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 15px 0 0 15px;
  }
  .arrow{
    border: solid black;
    border-width: 0 2px 2px 0;
    padding: 4px;
    transform: rotate(45deg);
  }
.dropdown{
    width: 10rem;
    height: 15rem;
    padding: 1rem 1rem;
    border: 2px solid #B7B7B7;
    border-radius: 15px;
    margin-top: 0.5rem;
    position: absolute;
    background: #FFFFFF;
    display: none;
}
#select-label{
    font-weight: 400;
}
.option{
    display: none;
}
.search-bar input{
    width: 25rem;
    height: 3.9rem;
    padding: 1rem 1rem;
    font-size: 18px;
    font-weight: 400;
    border: none;
}
::placeholder{
    color: #B7B7B7;
}
input:focus{
    outline: none;
}
.search-icon{
    width: 4rem;
    height: 3.9rem;
    background: #3C58A8;
    border-radius: 15px;
    padding: 1rem 1rem;
    margin-left: 1rem;
}
.portfolio{
    display: flex;
    margin-top: 2rem;
    margin-bottom: 5rem;
}
.boxes{
    width: 22rem;
    height: 6rem;
    display: flex;
    border: 1px solid #B7B7B7;
    margin-left: 1rem;
    padding: 1rem 1.5rem;
    background: #FFFFFF;
    border-radius: 15px;
    align-items: center;
}
.text{
    margin-left: 1.5rem;
    width: 10rem;
}
.text h1{
    font-size: 18px;
}
.text p{
    font-size: 14px;
    margin-top: 0.2rem;
}
@media (max-width: 1600px) {
    section{
        height: 5vh;
    }
    .text-box {
        width: 93%;
        margin-left: 3rem;
    }
    .search-box {
        margin-left: 32rem;
    }
}
@media (max-width: 1366px) {
    .search-box {
        margin-left: 26rem;
    }
}
</style>