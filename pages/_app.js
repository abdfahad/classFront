import '../styles/main.scss'
import { DatePickerProvider } from '@bcad1591/react-date-picker'
function MyApp({ Component, pageProps }) {
  return(
    <DatePickerProvider>
      <Component {...pageProps} />
    </DatePickerProvider>
  )
}

export default MyApp
