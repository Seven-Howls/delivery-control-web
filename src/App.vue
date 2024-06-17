<script>
import SideBarComponent from './components/sidebar/SideBarComponent.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    SideBarComponent
  },
  data() {
    return {
      showSidebar: false
    };
  },
  created() {
    if (localStorage.getItem('authToken') == '') {
      this.$router.push({ path: '/login' });
    } else {
      console.log('autenticado');
    }
    if(this.$route.path === '/') {
      this.$router.push({path: '/login'})
    }
  },
  watch: {
    '$route.path': {
      immediate: false,
      handler(newPath) {
        this.showSidebar = !newPath.includes('/login');
      }
    }
  },

  mounted() {
    if (this.$route.path != '/login') {
      this.fetchData();
    }
    
  },

  methods: {
    async fetchData() {
      try {
        await this.getPaymentMethod();
        await this.getDeliveriesFee();
        await this.getStatus();
        await this.getMotoboys();
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    },

    async getStatus() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/status`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        this.$store.dispatch('saveStatus', response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async getDeliveriesFee() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/deliveries-fee/`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        this.$store.dispatch('saveTaxas', response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async getPaymentMethod() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/payment-method`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        this.$store.dispatch('savePaymentMethod', response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async getMotoboys() {
      try {
        const response = await axios.get(`${this.$store.state.BASE_URL}/motoboys/find-all`, {
          headers: {
            'Authorization': `${localStorage.getItem('authToken')}`
          }
        });
        this.$store.dispatch('saveMotoboys', response.data);
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<template>
  <div>
    <SideBarComponent v-if="showSidebar" />
    <div :class="{ 'pl-52': showSidebar, 'pl-0': !showSidebar }">
      <router-view />
    </div>
  </div>
</template>

<style></style>
