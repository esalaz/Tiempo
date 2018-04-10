var messageBroker = new Vue();

Vue.component('vue-navbar', {
  template: '#vuenavbar',
  methods: {
    toggleNavDrawer: function(){
      messageBroker.$emit('toggle-nav-drawer');
    }
  }
});

Vue.component('nav-drawer', {
  template: "#navdrawer",
  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
});

new Vue({
  el: '#example',
  data: function(){
    return {
      open: true,
      items: [
        'ion-social-html5-outline',
        'ion-social-nodejs',
        'ion-social-css3-outline',
        'ion-social-github'
      ]
    }
  },
  created: function(){
    messageBroker.$on('toggle-nav-drawer', this.toggleDrawer)
  },
  beforeDestroy: function() {
    messageBroker.$off('toggle-nav-drawer', this.toggleDrawer)
  },
  methods: {
    toggleDrawer: function() {
      this.open = !this.open;
    }
  }
});
