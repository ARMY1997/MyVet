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
          <div class="form-group col">
            <label>Повторите пароль</label>
            <input type="password" class="form-control" required v-model="repPassword" />
            <div v-if="repPasswordError" class="error">{{repPasswordError}}</div>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="button is-primary">
                <span v-if="loading">loading</span>
                <span v-else>Зарегистрироваться</span>
          </button>
        </div>
        <div>
            <p v-if="submitStatus =='OK'">Спасибо за регистрацию</p>
            <p v-if="submitStatus =='ERROR'">Пожалуйста, заполните правильно форму</p>
            <p v-else>{{submitStatus}}</p>
        </div>
      </form>
        <div>
          <span>У вас уже есть аккаунт? <router-link to="/login"><strong>Войти</strong></router-link></span>
      </div>
  </div>
</template>
<script>


export default {
    data(){
        return{
            email:'',
            password:'',
            repPassword:'',
            emailError:'',
            passwordError:'',
            repPasswordError:'',
            submitStatus: null
        }
    },
    methods:{
        handleSubmit(){
            this.emailError=this.email
            this.passwordError= this.password.length > 6 ? '' : 'пароль должен быть не менее 5 символов'
            this.repPasswordError= this.password.value == this.repPassword.value ? '' : 'Пароли не совпадают'
            
            if(!this.passwordError && !this.repPasswordError){
                console.log('Registration')
                const user = {
                    email:this.email,
                    password:this.password
                }
                console.log(user)
                this.$store.dispatch('registerUser',user)
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
    .error{
        color:crimson;
        margin-top: 10px;
        font-weight: bold;
        font-size: 16px;
    }
</style>