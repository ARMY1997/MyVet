<template>
  <div class="registration column is-three-fifths is-offset-one-fifth ">
<form @submit.prevent="handleSubmit">
        <div class="form-group col">
            <label>Введите адрес почты</label>
            <input name="email" type="email" class="form-control" required v-model="email"/>
        </div>
        <div class="form-row">
          <div class="form-group col">
            <label>Введите пароль</label>
            <input name="password" type="password" class="form-control" required v-model="password"/>
            <div v-if="passwordError" class="error">{{passwordError}}</div>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="button is-primary">
                <span v-if="loading">loading</span>
                <span v-else>Войти</span>
          </button>
        </div>
      </form>
      <div>
          <span>У вас нет аккаунта? <router-link to="/registration"><strong>Зарегистрироваться</strong></router-link></span>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            emailError:'',
            passwordError:''
        }
    },
    methods:{
        handleSubmit(){
            this.passwordError= this.password.length > 6 ? '' : 'пароль должен быть не менее 5 символов'
            if(!this.passwordError && !this.repPasswordError){
                console.log('Registration')
                const user = {
                    email:this.email,
                    password:this.password
                }
                console.log(user)
                this.$store.dispatch('loginUser',user)
                .then(()=>{
                    this.submitStatus='OK'
                    this.$router.push('/')
                })
                .catch(err => {
                this.submitStatus = err.message
                })
            }
        }
    },
    computed:{
        loading(){
            return this.$store.getters.loading
        }
    }
}
</script>
<style scoped>
    .field{
        width:300px;
        margin-left: 35%;
    }
</style>