import Vue from "vue"
import Vuetify from "vuetify/lib"
import "material-design-icons-iconfont/dist/material-design-icons.css" // Ensure you are using css-loader

Vue.use(Vuetify)

export default new Vuetify({
	icons: {
		iconfont: "md",
	},
	theme: {
		themes: {
			light: {
				primary: "#265a70",
				secondary: "#1b3f4e",
				success: "#3cd1c2",
				info: "#ffaa2c",
				error: "#f83e70",
			},
		},
	},
})
