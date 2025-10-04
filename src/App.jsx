import {useEffect} from react;
import AOS from 'aos';
import 'aos/dist/aos.css'

import 'boxicons/css/boxicons.min.css'

export default function App() {
  useEffect(() => {
		Aos.init(
      {
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        mirror: true, //allow animations when scrolling past elements
        once: true, //animate only once while scrolling down
        
      }
    );
	})


  return (
    <>
    <h1 className="text-purple-600">Hello World from @typicaldeveloper</h1>
    </>
  )
}

