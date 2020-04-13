import { Vue, Component } from 'vue-property-decorator';
import AppFooter from './modules/component/AppFooter.vue';
import AppNavbar from './modules/component/AppNavbar.vue';

@Component({
  components: {
    AppFooter,
    AppNavbar,
  },
})
export default class App extends Vue {}