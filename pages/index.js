import Head from 'next/head'
import Header from './GlobalComponents/header'
import Footer from './GlobalComponents/footer'
import Body from './GlobalComponents/body'
export default function Home() {
  return (
    <div >

     <div className="container"  >
      <Header></Header>
     </div>
     <div className="container">
        <Body></Body>
      </div>
    <div className="container">
        <Header></Header>
      </div>

      <style jsx>{`
      .container {
        border: solid 1px #ff0000;
        zoom: 1; /* IE6&7 */
        //  min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%

       
    }
        .container:before,
        .container:after {
            content: "";
            display: table;
        }
        
        .container:after {
            clear: both;
        }
        

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
