<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/unnamed.png">
    <div class="container">
        <div>
          <legend for="nameField">Имя животного:</legend>
          <input type="text" placeholder="CJ Patoilo" v-model="taskTitle" @keypress.enter="newTask">
        </div>
        <div>
          <legend for="nameField">Вид:</legend>
          <input type="text" placeholder="CJ Patoilo" v-model="taskAnimalSpecies" @keypress.enter="newTask">
        </div>
        <div>
          <legend for="nameField">Возраст:</legend>
          <input  type="text" placeholder="CJ Patoilo" v-model="taskAge" @keypress.enter="newTask">  
        </div>
        <div class="option-list">
          <input class = "treatment_radio" type="radio" id = "Treatment" value = "Treatment" v-model = "Treatment"/>
          <label for="Treatment"> С лечением </label>
          <input class = "treatment_radio" type="radio" id = "notTreatment" value = "notTreatment" v-model = "Treatment"/>
          <label for="notTreatment"> Без лечения </label>
        </div>
        <div v-if = "Treatment === 'Treatment'">
          <div>
            <div>
              <legend for="ageRangeField">Жалобы:</legend>
              <input type="text" placeholder="CJ Patoilo" v-model="taskVisitReason" @keypress.enter="newTask">
            </div>
            <div>
              <legend for="commentField">Диагноз:</legend>
              <textarea placeholder="Hi CJ …" v-model="taskDiagnosis" @keypress.enter="newTask"></textarea>
            </div>
            <div>
              <legend for="commentField">Рекомендации по лечению:</legend>
              <textarea placeholder="Hi CJ …" v-model="taskTherapy" @keypress.enter="newTask"></textarea>
            </div>
          </div>
        </div>
        <div class="col-xs-6 grid-end">
          <a class="button--round button--big button button-primary" type="submit" @click="newTask">Добавить</a>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 data(){
   return{
     taskTitle: '',
     taskTherapy:'',
     Treatment:'',
     taskAge:'',
     taskDiagnosis:'',
     taskVisitReason:'',
     taskAnimalSpecies:''
   }
 },
   methods: {
    newTask(){
      if(this.taskTitle ===''){
        return
      }
      const task = {
        nameAnimal: this.taskTitle,
        Treatment: this.taskTreatment,
        Therapy: this.taskTherapy,
        Diagnosis:this.taskDiagnosis,
        animalSpecies:this.taskAnimalSpecies,
        age:this.taskAge,
        visitReason:this.taskVisitReason,
        completed: false,
        editing: false
      }
      this.$store.dispatch('newTask',task)
      console.log(task)
    }
   }
 }
</script>
<style scoped>
    .ui-label{
      margin-right:8px;
    }
    .task-item{
      margin-bottom: 20px;
    }
    .task-item:last-child{
      margin-bottom: 0;
    }
    .task-item__info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .button-close{
      width: 20px;
      height:20px;
    }
    .task-item__header{
      display: flex;
      align-items: center;
      margin-bottom: 18px;
    }
    .ui-checkbox-wrapper{
      margin-right: 8px;
    }
    .ui-title-3{
      margin-bottom: 0;
    }
    .option-list{
      display: flex;
    }
    .treatment_radio{
      margin-right: 12px;
    }
    label{
      margin-right: 12px;
    }
    label:last-child{
      margin-right: 0;
    }
</style>