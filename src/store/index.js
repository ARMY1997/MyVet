import { createStore } from 'vuex'

import user from './user'
import common from './common'

export default createStore({
  state: {
    tasks:[
      {
        'id': 1,
        'nameAnimal': 'Чимини',
        'Treatment': 'Прокапать уши и глаза',
        'animalSpecies': 'Крыса',
        'age':'2 года',
        'visitReason':'Жалобы на уши и глаза',
        'Therapy':'уши и глаза',
        'Diagnosis':'отит',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'nameAnimal': 'Джонни',
        'Treatment': 'Прокапать уши и глаза',
        'animalSpecies': 'Собака',
        'age':'2 года',
        'visitReason':'Жалобы на уши и глаза',
        'Therapy':'уши и глаза',
        'Diagnosis':'отит',
        'completed': true,
        'editing': false
      }
   ]
  },
  mutations: {
    newTask(state,payload){
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask({commit},payload){
      payload.id=Math.random()
      commit('newTask',payload)
    }
  },
  getters:{
    tasks(state){
      return state.tasks
    },
    taskCompleted(state){
      return state.tasks.filter(task=>{
        return task.completed
      })
    },
    taskNotCompleted(state){
      return state.tasks.filter(task=>{
        return task.completed == false
      })
    }
  },
  modules: {
    common,
    user
  }
})
