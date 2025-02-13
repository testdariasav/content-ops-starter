import '../css/main.css';
import { Rochester  } from 'next/font/google'
 
const rock = Rochester({ subsets: ['latin'], weight: '700' })
console.log('loading fonts')

 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={rock.className}>
      <Component {...pageProps} />
    </main>
  )
}



// import '../css/main.css';

// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }
