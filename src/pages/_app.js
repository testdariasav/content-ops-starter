import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['Roboto'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}



// import '../css/main.css';

// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }
