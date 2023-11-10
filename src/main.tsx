import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.css'
import { store } from './store/index.ts'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  )
} else {
  console.error("Error to find DOM with id 'root'.")
}
