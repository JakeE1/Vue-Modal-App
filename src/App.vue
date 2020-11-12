<template>

<div class="wrapper">

  <div class="wrapper-content">
    <section>
      <div class="container">
        <!-- firts modal -->
        <button class="btn btnPrimary" @click="firstModal = !firstModal">its a trap</button>
        <modals
         title="Alert" 
         v-show="firstModal"
         @close="firstModal = false">
         <div slot="body">
           <p>Title text</p>
            <button class="btn btnPrimary" @click="firstModal = false">close</button>
         </div>
         </modals>
          <!-- second modal -->
         <button class="btn btnPrimary" @click="secondModal.show = !secondModal.show">its a trap</button>
        <modals
         title="Tell me :)" 
         v-show="secondModal.show"
         @close="secondModal.show = false">
         <div slot="body">
           <form @submit.prevent="submitSecondForm">
           <label>Name:</label>
           <input type="text" v-model="secondModal.name">
           <label>Email:</label>
           <input type="text" v-model="secondModal.email">
            <button class="btn btnPrimary">post</button>
            </form>
         </div>
         </modals>

         <!-- validate modal -->
         <button class="btn btnPrimary" @click="validateModal = !validateModal">its a validate</button>
         <validateModal v-show="validateModal" @close="validateModal = false" />

         <!-- registration modal -->
         <button class="btn btnPrimary" @click="registrationModal = !registrationModal">registration</button>
         <registrationModal v-show="registrationModal" @close="registrationModal = false" />

         <edit />

      </div>
    </section>
  </div>

</div>
</template>

<script>

import modals from '@/components/UI/Modal.vue';  
import validateModal from '@/components/ModalValidate.vue';
import registrationModal from '@/components/ModalRegistration.vue';

export default {
  components: 
    {modals, validateModal, registrationModal, edit}
  ,
  data() {
    return {
      firstModal: false,
      secondModal: {
        show: false,
        name: '',
        email: ''
      },
      validateModal: false,
      registrationModal: false,
    }
  },
  methods: {
    submitSecondForm () {
      console.log({name: this.secondModal.name, email: this.secondModal.email});
      this.secondModal.name = '';
      this.secondModal.email = '';
      this.secondModal.show = false;
    }
  }
}
</script>

<style lang="scss">
.container{
  justify-content: space-between;
}
</style>
