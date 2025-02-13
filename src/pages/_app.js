import '../css/main.css';
import { Rochester  } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Rochester({ subsets: ['latin'] })
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
