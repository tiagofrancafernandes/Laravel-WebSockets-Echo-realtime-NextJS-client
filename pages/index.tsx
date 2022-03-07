import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import OmniWebsocketApi from '../components/OmniWebsocketApi'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  console.log('Home');

  let chat = new OmniWebsocketApi();
  chat.getInstance().private('user.1').listen('.MessageSended', (e: any) =>
    {
        if (e.message_data)
        {
            console.table(e);
        }
    });

  return (
    <>
    Ola mundo XYZ
    </>
  )
}

export default Home
