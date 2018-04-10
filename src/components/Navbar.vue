<template id="vuenavbar">
  <div id="main">
    <div id="main">

 <!-- The navigation menu will get the value of the "active" variable as a class. -->

 <!-- To stops the page from jumping when a link is clicked
we use the "prevent" modifier (short for preventDefault). -->

 <nav v-bind:class="active" v-on:click.prevent>

  <!-- When a link in the menu is clicked, we call the makeActive method,
defined in the JavaScript Vue instance. It will change the value of "active". -->

  <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
  <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
  <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
  <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
 </nav>

 <!-- The mustache expression will be replaced with the value of "active".
It will automatically update to reflect any changes. -->

 <p>You chose <b>{{active}}</b></p>
</div>
  </div>
</template>

<div id="example">
  <vue-navbar></vue-navbar>
  <nav-drawer v-bind:open="open">
    <div slot="drawer-content">
      <ul class="nav flex-column">
        <li class="nav-item active">
          <a class="nav-link">
            <i class="ion-clipboard"></i> Charts
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ion-map"></i> Location
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ion-ios-settings-strong"></i> Settings
          </a>
        </li>
      </ul>
    </div>
    <div slot="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col" v-for="item in items">
            <div class="card">
              <div class="card-block">
                <p><i :class="item"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav-drawer>
</div>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Tiempo'
    }
  }
}
</script>
<style>
a {
  cursor: pointer;
}
.container-fluid { padding: 20px; }

.navbar {
  background-color: #0277BD;
  color: white;

  .brand-icon {
    font-size: 1.7em;
    padding-right: 20px;
  }
}

#vue-navdrawer {
  .nav-item {
    padding-top: 5px 0;
    color: lightgray;

    &:first-child {
      margin-top: 20px;
    }

    &:hover {
      background-color: #4e6571;
    }

    &.active  {
      color: white;
    }

    i { font-size: 1.2em; }
  }
}

.btn-orange {
  background-color: #EF6C00;
  color: white;
}
#example {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .card {
    .card-block {
      color: #EF6C00;
      text-align: center;
      font-size: 6rem;
    }
  }
}

#vue-navdrawer {
  position: relative;
  width: 10%;
  height: 100%;
  background-color: #37474F;
  color: white;
  float: left;
}

#vue-navcontent {
  position: relative;
  width: 100%;
  height: 100%;
}

#navdrawer-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.nav-open {
  #vue-navcontent {
    left: 10%;
    width: 90%;
    animation: content-open 0.5s ease;
  }
}

.nav-closed {
  #vue-navcontent {
    animation: content-close 0.5s ease;
  }
}

.left-nav-enter,
.left-nav-leave-to {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}

.left-nav-enter-active,
.left-nav-leave-active {
  transition: all .5s ease;
}

@keyframes content-close {
  from {
    width: 90%;
    left: 10%;
  }
  to {
    width: 100%;
    left: 0;
  }
}

@keyframes content-open {
  from {
    width: 100%;
    left: 0;
  }
  to {
    width: 90%;
    left: 10%;
  }
}
</style>
