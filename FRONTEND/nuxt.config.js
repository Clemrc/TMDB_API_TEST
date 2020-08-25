export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '##FF5733'
	},
	/*
	 ** Global CSS
	 */
	css: ['@/assets/css/main.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
		'@nuxtjs/bulma',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://auth.nuxtjs.org
		'@nuxtjs/auth',
		'@nuxtjs/dotenv'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		baseURL: process.env.API_AUTH_URL
	},
	/*
	 ** Auth module configuration
	 ** See https://auth.nuxtjs.org/schemes/local.html#options
	 */
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: {
						url: 'auth/local',
						method: 'post',
						propertyName: 'jwt'
					},
					user: {
						url: 'users/me',
						method: 'get',
						propertyName: false
					},
					logout: false
				}
			}
		}
	},
	/*
	 ** Vue router configuration
	 ** See https://router.vuejs.org/
	 */
	// router: {
	// 	middleware: ['auth']
	// },
	/*
	 ** Build configuration
	 */
	build: {
		postcss: {
			preset: {
				features: {
					customProperties: false
				}
			}
		},
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
}
