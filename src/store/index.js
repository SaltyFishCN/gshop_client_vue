/*
 * Description: vuex 总出口
 * Author:LinJ
 * Date:2021-11-10 12:06:00
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 12:06:00
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
