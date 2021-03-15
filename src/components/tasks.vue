<template>
<div class="login">
  <section>
    <div class="container">
      <div class="task_list__header">
        <div class="buttons">
          <button class="button is-success is-outlined" @click="filter='Лечатся'">Лечатся</button>
          <button class="button is-success is-outlined" @click="filter='Вылеченые'">Вылеченые</button>
          <button class="button is-success is-outlined" @click="filter='Все пациенты'">Все пациенты</button>
        </div>
      </div>
      <div class="task-list">
        <div class="task-item" v-for="task in tasksFilter" :key="task.id" :class="{ completed: task.completed }">
          <div class="ui-card ui-card--shadow">
            <div class="task-item__info">
              <div class="task-item__main-info">
                <span class="ui-label ui-label--light">{{ task.animalSpecies }}</span>
              </div>
              <span class="button-close"></span>
            </div>
            <div class="task-item__content">
              <div class="task-item__header">
                <div class="ui-checkbox-wrapper">
                  <input class="ui-checkbox" type="checkbox" v-model="task.completed" />
                </div>
                <span class="ui-title-3">{{ task.nameAnimal }} {{ task.age }}</span>
              </div>
              <div class="task-item__body">
                <p>Жалобы: {{ task.visitReason }}</p>
                <p>Диагноз: {{ task.Diagnosis }}</p>
                <p>Рекомендации по лечению: {{ task.Therapy }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
    export default {
      data(){
        return{
          filter:'Лечатся'
        }
      },
      computed:{
          tasks(){
            return this.$store.getters.tasks
          },
          tasksFilter(){
            if(this.filter === 'Лечатся'){
              return this.$store.getters.taskNotCompleted
            }else if(this.filter === 'Вылеченые'){
              return this.$store.getters.taskCompleted
            }else if(this.filter === 'Все пациенты'){
              return this.$store.getters.tasks
            }
            return this.filter ==='Лечатся'
          }
      }
 }
</script>
<style scoped>
.buttons{
  margin-bottom: 5px;
}
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
</style>