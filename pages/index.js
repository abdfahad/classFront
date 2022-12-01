import Head from 'next/head'
import Image from 'next/image'
import Leftbar from '../component/leftbar/leftbar'
import Rightbar from '../component/rightbar/rightbar'
import Main from '../component/main/Main'
export default function Home() {
  return (
    <div className='main-body'>
      <Head>
        <title>Online classroom</title>
        <meta name="description" content="Classroom" />
      </Head>
     <div className='container'>
      <div className='leftbar'>
        <Leftbar />
      </div>
      <div className='main'>
        <Main/>
      </div>
      <div className=''>
        <Rightbar />
      </div>

     </div>
    </div>
  )
}
