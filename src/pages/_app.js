import { Inter } from 'next/font/google'
import '../css/main.css';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
console.log('loading fonts')
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}



// import '../css/main.css';

// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }
