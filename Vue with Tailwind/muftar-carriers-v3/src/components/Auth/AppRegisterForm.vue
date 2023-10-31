<template>

    <form id="signup-form" @submit.prevent="signUpUser">
        <div class="left-inner-addon input-container">
            <i class="fa fa-user"></i>
            <input type="text" aria-hidden="true" placeholder="Email" class="m-2 form-control" v-model="email" />
        </div>
        <div class="left-inner-addon input-container">
            <i class="fa fa-lock"></i>
            <input type="password" placeholder="Password" class="m-2 form-control" v-model="password" />
            <p v-if="errmsg" style="color: red; font-size: 12px">
                The password is invalid or the user does not have a password
            </p>
        </div>

        <br />
        <div class="flex justify-center items-center">
            <button type="submit" class="btn btn-color w-40">Register</button>
        </div>
    </form>
</template>

<script>
import { fb } from "@/_firebase/init";
export default {
    name: "AppRegisterForm",
    data: () => ({
        email: "",
        password: "",
        mc: "",
    }),
    methods: {
        signUpUser() {
            fb.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    () => {
                        this.$router.replace("/overview");
                    },
                    (err) => {
                        alert(`Error - ${err.message}`);
                    }
                );
        },
    }

}

</script>


<style scoped>
.left-inner-addon {
    position: relative;
}

.left-inner-addon input {
    padding-left: 35px !important;
}

.left-inner-addon .svg-inline--fa {
    position: relative !important;
    top: 40px !important;
    left: 15px;
    color: #fff;
}

.btn-color {
    background-color: #676fa3;
    border: none;
}

.form-control {
    /* background-image: linear-gradient(#1b7ac0, #052f65); */
    background-color: #000000;
    /* border: 2px solid white; */
}

textarea:focus,
input:focus {
    color: white;
}

input:text {
    color: white;
}

input,
select,
textarea {
    color: #fff;
}

</style>