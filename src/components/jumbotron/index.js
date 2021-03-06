// import dependencies
import 'vuestrap/components/jumbotron'
import template from './jumbotron.html'

// export component object
export default {
  template: template,
  replace: true,
  props: {
  	fluid: {
  		type: Boolean,
  		default: false
  	}
  }
}
