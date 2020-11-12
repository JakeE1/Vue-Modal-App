<template>
   <modal
    title="Tell me :)" 
    @close="$emit('close')" >
        <div slot="body">
            <form @submit.prevent="onSubmit">
                <!-- name -->
                <div class="form-item" :class="{ errorInput: $v.name.$error }">
                    <label>Name:</label>
                    <p class="errorText" v-if="!$v.name.required">Field is required</p>
                    <p class="errorText" v-if="!$v.name.minLength">Name A must have at
                        least {{ $v.name.$params.minLength.min }} letters.</p>
                    <input 
                        v-model="name"
                        :class="{ error: $v.name.$error }" 
                        @change="$v.name.$touch()">
                </div>
                <!-- email -->
                <div class="form-item" :class="{ errorInput: $v.email.$error }">
                    <label>Email:</label>
                    <p class="errorText" v-if="!$v.email.required">Field is required</p>
                    <p class="errorText" v-if="!$v.email.email">Invalid Email</p>
                    <input 
                        v-model="email"
                        :class="{ error: $v.email.$error }" 
                        @change="$v.email.$touch()">
                </div>
                <!-- password -->
                <div class="form-item" :class="{ errorInput: $v.password.$error }">
                    <label>password:</label>
                    <p class="errorText" v-if="!$v.password.required">Field is required</p>
                    <input type="password"
                        v-model="password"
                        :class="{ error: $v.password.$error }" 
                        @change="$v.password.$touch()">
                </div>
                
                <button class="btn btnPrimary">post</button>
            </form>
        </div>
    </modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue';

export default {
    components: {modal},
    data () {
        return {
            name: "",
            email: '',
            password: ''
        }
    },
    validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
        required
    }
  },
    methods: {
        onSubmit () {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                const user = {
                    name: this.name,
                    email: this.email,
                    pass: this.password
                }
                console.log(user);
                this.name = "";
                this.email = "";
                this.password = "";
                this.$v.$reset();
                this.$emit('close');
            }
           
        }
    }
}
</script>

<style lang="scss">
.form-item .errorText { 
    display:none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: red;
}
.form-item {
    &.errorInput .errorText {
        display: block
    }
}
input.error {
    border-color: rgb(180, 62, 62);
}

</style>