<template>
	<form>
		<input
			v-model="userInfo.email"
			label="Email"
			:rules="[required('email'), emailFormat()]"
		/>

		<input
			v-model="userInfo.password"
			label="Password"
			:type="text"
			counter="true"
			:rules="[required('password'), minLength('password', 8)]"
		/>

		<button @click="submitForm(userInfo)">
			{{ buttonText }}
		</button>
	</form>
</template>

<script>
import validations from '@/utils/validations'
export default {
	props: ['submitForm', 'buttonText', 'hasName'],
	data() {
		return {
			userInfo: {
				name: '',
				email: '',
				password: ''
			},
			...validations
		}
	}
}
</script>

<style lang="scss" scoped></style>
