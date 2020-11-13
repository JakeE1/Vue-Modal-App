<template>
<div>
    <loginModal v-show="showModalView === 'login'" @close="closeModalView" />
    <registrationModal v-show="showModalView === 'registration'" @close="closeModalView" />
</div>
</template>
<script>
import loginModal from '~/js/components/UI/Modal.vue'
import registrationModal from '~/js/components/UI/ModalRegistration.vue'

export default {
    components: { loginModal, registrationModal },
    computed: {
        showModalView () {
            return this.$store.getters.getModalView
        }
    },
    methods: {
        closeModalView () {
            this.$store.dispatch('setModalView', null)
        }
    }

}
</script>